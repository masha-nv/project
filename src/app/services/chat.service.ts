import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, Subject } from 'rxjs';
import { CURRENT_QUESTION_UPDATE, IQA, IResult, QUESTIONS_ANSWERS } from '../data';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private newQuestionRequested = new BehaviorSubject<boolean>(false);
  newQuestionRequested$ = this.newQuestionRequested.asObservable()
  currentQuestionNumber: number = 0;
  private currentQuestionSub = new BehaviorSubject<IQA>(QUESTIONS_ANSWERS[this.currentQuestionNumber])
  currentQuestion$ = this.currentQuestionSub.asObservable();
  private isTestReStarted = new BehaviorSubject<boolean>(false)
  isTestReStarted$ = this.isTestReStarted.asObservable();
  private resultSubj = new BehaviorSubject<IResult>({total: 0, introvert: 0, extravert:0});
  resultObs$ = this.resultSubj.asObservable();

  constructor() { 
    this.currentQuestionSub.next(QUESTIONS_ANSWERS[this.currentQuestionNumber]);
   }

   updateCurrentQuestion(operation: CURRENT_QUESTION_UPDATE) {
    switch(operation) {
      case CURRENT_QUESTION_UPDATE.DECR:
        this.currentQuestionNumber--;
        this.currentQuestionSub.next(QUESTIONS_ANSWERS[this.currentQuestionNumber])
        break;
      case CURRENT_QUESTION_UPDATE.INCR:
        this.currentQuestionNumber++;
        break;
      case CURRENT_QUESTION_UPDATE.RESET:
        this.currentQuestionNumber = 0;
        this.resetData()
        break;
      default:
        throw new Error('invalid operation')
    }
   }

   
  private resetData() {
    this.isTestReStarted.next(true);
    QUESTIONS_ANSWERS.forEach(question => {
      question.isAnswered = false, question.selectedOption = ''
    });
    this.currentQuestionSub.next(QUESTIONS_ANSWERS[this.currentQuestionNumber])
   }

   getCurrentQuestion() {
    this.newQuestionRequested.next(true)
    this.isTestReStarted.next(false)
    return of(QUESTIONS_ANSWERS[this.currentQuestionNumber])
  }

  getAllQuestionsStatus(){
    return of(QUESTIONS_ANSWERS).pipe(
      map(questionsAnswers => questionsAnswers.map(item => item.isAnswered))
    )
  }

  markQuestionAsAnswered(selectionOption: string): Observable<boolean> {
    QUESTIONS_ANSWERS[this.currentQuestionNumber].isAnswered = true;
    QUESTIONS_ANSWERS[this.currentQuestionNumber].selectedOption = selectionOption;
    !QUESTIONS_ANSWERS[this.currentQuestionNumber].isLast && this.currentQuestionNumber++;
    this.currentQuestionSub.next(QUESTIONS_ANSWERS[this.currentQuestionNumber]);
    this.newQuestionRequested.next(true);
    return of(true)
  }

  getAllQuestions(){
    return of(QUESTIONS_ANSWERS)
  }

  getResults() {
    let introvert = 0, extravert = 0;
    QUESTIONS_ANSWERS.forEach((question, qIdx) => {

      question.options.indexOf(question.selectedOption) % 2 && qIdx % 2 ? introvert+=1 : extravert+=1;
    })
    const result: IResult = {
      total: introvert + extravert,
      introvert,
      extravert
    }
    this.resultSubj.next(result)
    
  }
}
