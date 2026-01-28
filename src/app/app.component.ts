import { Component, inject } from '@angular/core';
import { SharedModule } from './shared.module';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { ProgressComponent } from "./components/progress/progress.component";
import { DoneComponent } from "./components/done/done.component";
import { BusyComponent } from './components/busy/busy.component';
import { QuizStore } from './store/quiz.store';
import { QuestionPresenterComponent } from "./components/question-presenter/question-presenter.component";

@Component({
  selector: 'app-root',
  imports: [SharedModule, QuestionPresenterComponent, ToolbarComponent, ProgressComponent, DoneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly store = inject(QuizStore)
  readonly currentQuestionIndex = this.store.currentQuestionIndex
  readonly numberOfQuestions = this.store.questionsCount

  title = 'ngrx-quiz';
}
