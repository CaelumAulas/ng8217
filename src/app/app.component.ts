import { Component } from '@angular/core';
import { Email } from './models/email';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng8217';
  readonly patternEmail = "^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$";
  email = new Email();
  emailList: Email[] = [];

  private _isNewEmailOpen = false;

  get isNewEmailOpen(){
    return this._isNewEmailOpen;
  }

  toggleNewEmailForm(){
    this._isNewEmailOpen = !this.isNewEmailOpen;
  }

  handleNewEmail(formEmail: NgForm){
    this.emailList.push(this.email)
    this.email = new Email();
    formEmail.resetForm();
    this.toggleNewEmailForm();

  }
    
}
