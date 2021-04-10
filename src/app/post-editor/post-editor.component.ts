import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent {
  postForm = this.fb.group({
    title: [null, Validators.required],
    body: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
