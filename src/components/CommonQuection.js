import React from 'react';

function CommonQuestion() {
    const questions = [
        {
            question: "How do I open a case with a seller?",
            questionLink: ""
        },
        {
            question: "I forgot my password. How do I reset it?",
            questionLink: ""
        },
        {
            question: "Why is my payment on hold or unavailable?",
            questionLink: ""
        },
        {
            question: "I want my money back. Can I cancel a payment?",
            questionLink: ""
        },
        {
            question: "Why am I receiving emails from PayPal when I don't have an account?",
            questionLink: ""
        },
        {
            question: "How do I report an unauthorized transaction or account activity?",
            questionLink: ""
        },
        {
            question: "Why is the payment I sent pending? Can I cancel it?",
            questionLink: ""
        },
        {
            question: "How do I request a refund?",
            questionLink: ""
        },
        {
            question: "Why was my payment declined?",
            questionLink: ""
        },
        {
            question: "How do I change the name on my PayPal account?",
            questionLink: ""
        }
    ];

  return (
    <div className='max-w-lg'>
        <h1 className='text-2xl'>Common questions</h1>
        <div className='flex flex-col gap-4 mt-4'>
        {
            questions.map((question, index) => (
                <a key={index} className='font-semibold text-blue-600' href={question.questionLink}>{question.question}</a>
            ))
        }
        </div>
    </div>
  );
}

export default CommonQuestion;
