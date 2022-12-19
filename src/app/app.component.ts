import { Component } from '@angular/core';
import { CURRENT_QUESTION_UPDATE } from './data';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personality-test';

  constructor(private chatService: ChatService) {

  }
  reset() {
    this.chatService.updateCurrentQuestion(CURRENT_QUESTION_UPDATE.RESET) 
  }
  
}

