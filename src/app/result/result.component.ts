import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IResult } from '../data';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  ngOnInit(): void {
  }

}
