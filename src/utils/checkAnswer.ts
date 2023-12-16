interface CheckAnswer{
    (selectedOption:number, correctOption:number):boolean
}

export const  checkAnswer:CheckAnswer =(selectedOption, correctOption) => selectedOption === correctOption;