import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
    selector: 'demo-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
 
 /*private*/ userData : User[];
 /*private*/ user: User;
 /*private*/ showModal: boolean = false;
  
  constructor( ) {
 
    this.userData =  <User[]>[];
      
    var u1 = <User>{};

        u1.id = 1;
        u1.name ="Django Jaz";
        u1.email="Django.J@demo.r.us";
        this.userData.push(u1);
        var u2 = <User>{};
        u2.id = 2;
        u2.name ="Charles Mingus";
        u2.email="Charles.M@demo.r.us";
        this.userData.push(u2);
    }

    ngOnInit() {
   
      }

      openModal($event, user) {
        $event.preventDefault();
        this.user = user;
        this.showModal = true;
      }
      closeModal() {
        this.showModal = false;
        this.user = null;
      }
 
}

 
