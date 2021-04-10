import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export type FormName = 'post' | 'None';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css'],
})
export class WallComponent implements OnInit {
  form: FormName = 'post';

  items: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('posts').valueChanges();
    //TODO : query orderBy desc..
  }

  get showPostForm() {
    return this.form === 'post';
  }

  toggleForm(name: FormName) {
    if (name == this.form) {
      this.form = 'None';
    } else {
      this.form = name;
    }
  }

  ngOnInit(): void {}
}
