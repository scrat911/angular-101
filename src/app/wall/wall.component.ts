import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  items: Observable<any[]>;

  constructor(firestore: AngularFirestore){
    this.items = firestore.collection('posts').valueChanges();
  }

  ngOnInit(): void {
  }

}
