import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../common/services/quiz.service';

@Component({
  selector: 'app-answers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './answers.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnswersComponent {
  private readonly _quizService = inject(QuizService);

  protected readonly review$ = this._quizService.reviewData$
}
