import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css'],
})
export class PostEditorComponent {
  postForm = this.fb.group({
    title: [null, Validators.required],
    body: [null, Validators.required],
    img: '',
  });

  private authState;
  private ref;
  private img;
  private task;
  private url: Observable<string | null>;

  constructor(
    private fb: FormBuilder,
    public firestore: AngularFirestore,
    public auth: AngularFireAuth,
    private storage: AngularFireStorage
  ) {
    auth.authState.subscribe((state) => {
      this.authState = state;
    });
  }

  upload(event) {
    const randomId = Math.random().toString(36).substring(2);
    this.ref = this.storage.ref('/post_images/' + randomId);
    this.img = event.target.files[0];
  }
  submitEntry(value: any): void {
    let author =
      this.authState['displayName'] === null
        ? this.authState['email']
        : this.authState['displayName'];

    this.task = this.ref.put(this.img);
    this.task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.ref.getDownloadURL().subscribe((url) => {
            this.url = url;
            this.firestore.collection('posts').add({
              title: value['title'],
              body: value['body'],
              img: this.url,
              author: author,
              date: Date.now(),
            });
          });
        })
      )
      .subscribe();


  }
}
