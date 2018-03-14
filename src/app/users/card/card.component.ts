import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'vf-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  private isEditMode = false;
  @Input()
  user;

  private newUser =null;

  ngOnInit(){
  this.newUser = JSON.parse(JSON.stringify(this.user));
    console.log(this.newUser);
  }
  @Output()
  deleteUser = new EventEmitter<any>();

  delete() {
    this.deleteUser.emit(this.user.id);
  }

  edit() {
    this.isEditMode = true;
  }

  cancel() {
    this.isEditMode = false;
  }
  save() {
    this.user.name = this.newUser.name;
    this.user.age = this.newUser.age;
    this.isEditMode = false;
  }
}

