import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'vf-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  private isEditMode = false;
  private newUser = null;

  @Input()
  user;

  @Input()
  mode;

  @Output()
  deleteUser = new EventEmitter<any>();

  @Output()
  createUser  = new EventEmitter<any>();

  ngOnInit() {
    this.newUser = this.user ? JSON.parse(JSON.stringify(this.user)) : { name: '', age: 0 };
    console.log(this.newUser);
  }

  delete() {
    this.deleteUser.emit(this.user.id);
  }

  edit() {
    this.isEditMode = true;
  }

  cancel() {
    this.isEditMode = false;
    this.newUser=JSON.parse(JSON.stringify(this.user)) ; 
  }
  save() {
    this.user.name = this.newUser.name;
    this.user.age = this.newUser.age;
    this.isEditMode = false;
  }

  create(){
    this.createUser.emit(this.newUser);
    this.newUser = { name: '', age: 0 };
  }
}

