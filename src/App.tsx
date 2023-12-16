import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React, { useReducer, useState } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Score from "./components/Score";
import { quizData } from "./data/quizData";
import { checkAnswer } from "./utils/checkAnswer";
import { AppState } from "./reducer/quizReducer.types";
import { quizReducer } from "./reducer/quizReducer";
import { useTheme } from "./context/ThemeContext";

export const initialState: AppState = {
  quizData: quizData,
  currentQuestionIndex: 0,
  score: 0,
};

function App() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
    < main className={theme === 'light'? 'light-mode': 'dark-mode'}>
      <Header title="Quiz App" toggleTheme={toggleTheme}/>
      {state.currentQuestionIndex < state.quizData.length ? (
        <Quiz
          quiz={state.quizData[state.currentQuestionIndex]}
          onOptionClick={(selectedOption) =>
            dispatch({ type: "ATTEMPTED", selectedOption })
          }
          dispatch={dispatch}
        />
      ) : (
        <>
          <p>Thanks for playing!</p>

          <Score
            currentScore={state.score}
            totalScore={state.quizData.length}
            onReset={() => dispatch({ type: "RESET" })}
          />
        </>
      )}
      </main>
    </>
  );
}

export default App;
