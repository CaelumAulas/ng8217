import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  username = ''

  constructor(private rotaAtiva: ActivatedRoute) { }

  ngOnInit() {
    this.username = this.rotaAtiva.snapshot.params.username;
  }

}
