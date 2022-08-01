import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginInput: {email: string, password: string} = {email: '', password: ''};
  
  constructor() { }

  ngOnInit(): void {
  }

}
