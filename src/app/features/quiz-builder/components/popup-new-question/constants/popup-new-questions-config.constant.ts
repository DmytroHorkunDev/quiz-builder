import { TQuizItem } from '../../../../../common/types/quiz-item.type';

export const ANSWER_TYPES: { label: string, value: TQuizItem['answerType'] }[] = [
  {
    label: 'Paragraph',
    value: 'paragraph'
  },
  {
    label: 'Check list',
    value: 'checkboxes'
  }
];

export const QUESTION_OPTIONS: { controlName: string, label: string, value: boolean }[] = [
  // {
  //   controlName: 'isOwnAnswersAvailable',
  //   label: 'Allow user to specify their own answer',
  //   value: false
  // },
  {
    controlName: 'isRequiredField',
    label: 'This field is required',
    value: false
  }
];
