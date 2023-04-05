import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { filter, Subject, takeUntil } from 'rxjs';

import { QuizService } from '../../common/services/quiz.service';
import { DestroyDirective } from '../../common/utils/destroy.directive';
import { DynamicFormComponent } from '../../shared/dynamic-form/dynamic-form/dynamic-form.component';
import { PopupNewQuestionComponent } from './components/popup-new-question/popup-new-question.component';

@Component({
  selector: 'app-quiz-builder',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, ReactiveFormsModule, DynamicFormComponent, NgOptimizedImage],
  templateUrl: './quiz-builder.component.html',
  styleUrls: ['./quiz-builder.component.scss'],
  hostDirectives: [DestroyDirective],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizBuilderComponent {
  private _matDialog: MatDialog = inject(MatDialog);
  private _destroy$ = inject(DestroyDirective).destroy$;
  private _quizService = inject(QuizService);

  public quizForm: FormGroup = new FormGroup({});

  protected review$ = this._quizService.reviewData$

  public onSubmit(): void{
    if (this.quizForm.invalid) return;
    this._quizService.reviewAnswers(this.quizForm.value);
  }

  public addNewQuestion(): void{
    this._matDialog.open(PopupNewQuestionComponent, {
      width: '320px'
    }).afterClosed()
      .pipe(
        takeUntil(this._destroy$),
        filter(value => !!value)
      )
      .subscribe(question => {
        this._quizService.addQuestion(question);
      });
  }
}
