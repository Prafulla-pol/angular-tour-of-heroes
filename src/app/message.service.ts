import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages: string[] = [];

  clear(): void{
    this.messages = [];
  }

  add(message: string): void {
    this.messages.push(message);
  }
}
