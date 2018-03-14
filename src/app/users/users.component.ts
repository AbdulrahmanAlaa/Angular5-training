import { Component } from '@angular/core';

@Component({
  selector: 'vf-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: Array<any> = [
    {
      id: 1,
      name: 'Ahmed',
      age: 25
    },
    {
      id: 2,
      name: 'Mohammed',
      age: 24
    },
    {
      id: 3,
      name: 'Ali',
      age: 26
    }
  ];

  createUser(user: any) {
    this.users.push(JSON.parse(JSON.stringify(user)));
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => {
      console.log(this);
      return user.id !== id;
    });
  }
}
