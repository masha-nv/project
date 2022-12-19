import { Component, OnInit } from '@angular/core';
import { CURRENT_QUESTION_UPDATE } from '../data';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  isTestStarted: boolean = true;
  isTestComplete: boolean = false;
  btnText: string = 'Start New Test';
  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.isTestReStarted$.subscribe(res => {
      this.isTestStarted = res;
      this.btnText = this.isTestStarted ? 'Reset All Questions' : 'Start New Test'
    })
  }

  restartTest() {
    this.chatService.updateCurrentQuestion(CURRENT_QUESTION_UPDATE.RESET)
  }

}
