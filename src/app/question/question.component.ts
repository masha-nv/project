import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatSelectionList } from '@angular/material/list';
import { Router } from '@angular/router';
import { Observable, Subscription, switchMap, tap } from 'rxjs';
import { CURRENT_QUESTION_UPDATE, IQA } from '../data';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @ViewChild('options')
  options!: MatSelectionList;
  @ViewChild('matListOption')
  matListOption!: any;
  
  currQuestionNumber: number = this.chatService.currentQuestionNumber;
  currentQuestion$!: Observable<IQA>;
  subscription = new Subscription();
  isRestarted: boolean = false; // ?

  constructor(public chatService: ChatService, private router: Router) { }

  ngOnInit(): void {
    this.currentQuestion$ = this.chatService.currentQuestion$;
    this.chatService.isTestReStarted$.subscribe(isRestarted => {
      if (isRestarted) {
        //this.isRestarted = true;
      }
    });
    
  }

  getNextQuestion() {
    const selectedOption = this.options.options['_results'].find((r: MatOption) => r.selected).value;
    this.chatService.markQuestionAsAnswered(selectedOption).subscribe()
  }

  getPreviousQuestion() {
    this.chatService.updateCurrentQuestion(CURRENT_QUESTION_UPDATE.DECR)
  }

  handleSubmit() {
    const selectedOption = this.options.options['_results'].find((r: MatOption) => r.selected).value;
    
    this.subscription.add(this.chatService.markQuestionAsAnswered(selectedOption).subscribe());

    this.chatService.getResults();
    this.router.navigateByUrl('result')

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
