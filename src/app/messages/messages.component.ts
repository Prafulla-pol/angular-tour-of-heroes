import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // Angular only binds to public component properties
  constructor(public messageService:  MessageService) {
    // Angular will inject the singleton MessageService into that property
    // when it creates the MessagesComponent
   }

  ngOnInit(): void {
  }

}
