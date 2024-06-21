import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Questions } from "./Questions";

const initialState = {
    questions: Questions,
    currentQuestionIndex: 0,
    score: 0,
    gameState: "main"
}

const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        startQuiz: (state) => {
            state.gameState = "quiz";
            state.currentQuestionIndex = 0;
            state.score = 0;
        },
        answerQuiz: (state, action) => {
            const isCorrect = action.payload === state.questions[state.currentQuestionIndex].answerId;
            if(isCorrect) {
                state.score += 1;
            }
            state.currentQuestionIndex += 1;
            if(state.currentQuestionIndex === state.questions.length) {
                state.gameState = "end";
            }
        },
        endQuiz: (state) => {
            state.gameState = "main";
            state.currentQuestionIndex = 0;
            state.score = 0;
        }
    }
})

export const { startQuiz, answerQuiz, endQuiz } = quizSlice.actions;

const store = configureStore({
    reducer: {
        quiz: quizSlice.reducer
    }
})

export default store;