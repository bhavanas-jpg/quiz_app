type AttemptedAction ={
    type: "ATTEMPTED";
    selectedOption: number;
}

type ResetAction ={
    type: "RESET";
}
 type NextQnAction ={
    type: "NEXT_QN"
 }
 type PreviousQnAction ={
    type: "PREV_QN"
 }

export type QuizAction = AttemptedAction | ResetAction |NextQnAction | PreviousQnAction;

export type AppState ={
    quizData: {
        question: string;
        options: string[];
        correctOption: number;
    }[];
    currentQuestionIndex: number;
    score: number;
}