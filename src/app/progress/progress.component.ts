import { Component, OnInit } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { IQA } from '../data';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  questionsStatuses$!: Observable<boolean[]> ;
  questionsAnswers: IQA[]=[];
  constructor(private chatService: ChatService) { 
  }

  ngOnInit(): void {
    this.questionsStatuses$ = this.chatService.newQuestionRequested$.pipe(
      switchMap(() => this.chatService.getAllQuestionsStatus())
    )
    this.chatService.isTestReStarted$.subscribe((isRestarted: boolean) => {
      if (isRestarted) {
        this.questionsStatuses$ = this.chatService.newQuestionRequested$.pipe(
          switchMap(() => this.chatService.getAllQuestionsStatus())
        )
      }
    })
  }
  

}
