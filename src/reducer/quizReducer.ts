import { AppState, QuizAction } from "./quizReducer.types";
import { checkAnswer } from "../utils/checkAnswer";
import { initialState } from "../App";

const getNextQuestionIndex = (currentIndex:number, totalQuestions:number):number => currentIndex + 1 <= totalQuestions ? currentIndex + 1 : currentIndex;

const getPreviousQuestionIndex = (currentIndex:number, totalQuestions:number):number => currentIndex + 1 <= totalQuestions ? currentIndex - 1 : currentIndex;


export const quizReducer = (state: AppState, action: QuizAction): AppState => {
  switch (action.type) {
    case "ATTEMPTED":
        const nextQuestionIndex = getNextQuestionIndex(
            state.currentQuestionIndex,
            state.quizData.length
        )
        const updatedScore = checkAnswer(
            action.selectedOption,
            state.quizData[state.currentQuestionIndex].correctOption
        ) ? state.score + 1 : state.score;

        return {
            ...state,
            currentQuestionIndex : nextQuestionIndex,
            score: updatedScore
        }
    case "RESET":
        return initialState
    case "NEXT_QN":
        const nextQnIndex = getNextQuestionIndex(
            state.currentQuestionIndex,
            state.quizData.length
        )
        return {
            ...state,
            currentQuestionIndex : nextQnIndex
        }
    case "PREV_QN" : 
        const prevQnIndex = getPreviousQuestionIndex(
            state.currentQuestionIndex,
            state.quizData.length
        )
        return {
            ...state,
            currentQuestionIndex : prevQnIndex
        }
    default:
      return state;
  }
};
