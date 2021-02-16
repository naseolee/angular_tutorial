import { Component, OnInit } from '@angular/core';
import { MessageService} from '../messages.service';
import { Hero} from '../hero';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService : MessageService) { }

  ngOnInit(): void {
  }
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    money: 9000
   };
}
