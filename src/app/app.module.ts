import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material components
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';


// custom components
import { ChatComponent } from './chat/chat.component';
import { QuestionComponent } from './question/question.component';
import { ProgressComponent } from './progress/progress.component';
import { ResultComponent } from './result/result.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PercentPipe } from './pipes/percent.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    QuestionComponent,
    ProgressComponent,
    ResultComponent,
    BarChartComponent,
    PercentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatRadioModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
