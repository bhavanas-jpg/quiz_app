import { useTheme } from "../context/ThemeContext";
import Score from "./Score";
import {quizData} from '../data/quizData';

interface QuizProps{
    quiz:{
    question : string,
    options: string[],
    correctOption: number,
    };
    onOptionClick: (selectedOption:number)=> void;
    dispatch:{
        
    }
}

// const nextQuestionHandler =(question)=> {
//    let  nextQn= quizData.indexOf(question);
// return nextQn + 1;
// }


const Quiz:React.FC<QuizProps> =({quiz, onOptionClick, dispatch}) =>{
 
    return(
        <div>
            <p>{quiz.question}</p>
            <ul>
                {quiz.options.map((option, index)=>(
                    <li
                     key={index}
                     onClick={()=>onOptionClick(index)}
                     >{option}</li>
                ))}
                
            </ul>
            {/* <Score currentScore={score} totalScore={quizData.length} /> */}
            <div>
                <button
                disabled={quiz.question === quizData[0].question}
                onClick={()=>dispatch({type: "PREV_QN"})}>Previous</button>
                <button onClick={()=>dispatch({type: "NEXT_QN"})}>Next</button>
            </div>
        </div>
    )
}

export default Quiz;