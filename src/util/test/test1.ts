import { Test } from "./types";



export const test1: Test = {
    title: "Test Title",
    timeLimit: 1200,
    questions: [
        {
            type: "free-response",
            question: "This is a free response question"
        },
        {
            type: "multiple-choice",
            question: "MC question",
            options: ["answer 1", "answer 2", "answer 3", "answer 4"],
            answer: 1
        },
        {
            type: "select-all",
            question: "select all question",
            options: ["answer 1", "answer 2", "answer 3", "answer 4"],
            answers: [1]
        },
        {
            type: "sentence-completion",
            question: "Complete the sentence: the fox ____ over the dog."
        },
        {
            type: "true-false",
            question: "True-False question.",
            answer: "true"
        }
    ]
};