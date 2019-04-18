import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Email } from 'src/app/models/email';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input('email') emailData: Email;
  @Output() vaiRemover = new EventEmitter()

  constructor() { }

  ngOnInit() {}

  removeItem(){
    if(confirm('Tem certeza que vc quer apagar?')){
      this.vaiRemover.emit({emailId: this.emailData.id})
    }
    
  }

}
