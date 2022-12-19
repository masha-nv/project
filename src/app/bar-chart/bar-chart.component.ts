import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IResult } from '../data';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @Input('results')
  results!: IResult;

  results$!: Observable<IResult>

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.results$ = this.chatService.resultObs$;
  }


}
