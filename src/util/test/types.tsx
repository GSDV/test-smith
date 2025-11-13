type MultipleChoiceQuestion = {
    type: "multiple-choice";
    question: string;
    answers: string[];
    correctAnswerIndex: number;
};

type FreeResponseQuestion = {
    type: "free-response";
    question: string;
};

type TrueFalseQuestion = {
    type: "true-false";
    question: string;
};

type SentenceCompletionQuuesstion = {
    type: "sentence-completion";
    question: string; // Will include the underscores as blanks.
};

type SelectionQuestion = {
    type: "selection";
    question: string;
    answers: string[];
    correctAnswerIndexes: number[];
};

export type Question = MultipleChoiceQuestion
| FreeResponseQuestion
| TrueFalseQuestion
| SentenceCompletionQuuesstion
| SelectionQuestion;


export type Test = {
    title: string;
    timeLimit: number | null; // Seconds, or null if none.
    questions: Question[];
};