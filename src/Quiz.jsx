import React, { useState } from 'react';

const Quiz = ({ topic }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const quizQuestions = {
    'Components': [
      {
        question: 'What is a React component?',
        options: ['A function that returns HTML code', 'A JavaScript function or class that returns JSX code to define the UI', 'A global object that holds data', 'A CSS stylesheet that styles the UI'],
        answer: 'A JavaScript function or class that returns JSX code to define the UI'
      },
      {
        question: 'Which of the following is true about class components?',
        options: ['They cannot have state.', 'They cannot accept props.', 'They are defined using a JavaScript class and must have a render method.', 'They are only used in old React versions.'],
        answer: 'They are defined using a JavaScript class and must have a render method.'
      },
      {
        question: 'Which of the following methods is used to create a class component in React?',
        options: ['React.createClass()', 'new React.Component()', 'Define a class extending React.Component', 'Use a createComponent() function'],
        answer: 'Define a class extending React.Component'
      },
      {
        question: 'What does a React component typically return?',
        options: ['A plain object', ' JSX to describe what the UI should look like', 'A string of HTML', 'A function call'],
        answer: 'JSX to describe what the UI should look like'
      },
      {
        question: 'Which lifecycle method is called immediately after a component is mounted in a class component?',
        options: ['componentDidUpdate()', 'componentWillUnmount()', 'componentDidMount()', 'render()'],
        answer: 'componentDidMount()'
      }
    ],
    'JSX': [
     {
        question: 'What is JSX in React?',
        options: ['A JavaScript library for rendering HTML', 'A JavaScript extension that allows HTML-like syntax in JavaScript', 'A tool for styling React components', 'A special type of HTML element'],
        answer: 'A JavaScript extension that allows HTML-like syntax in JavaScript'
      },
      {
        question: 'Which of the following is a requirement for JSX?',
        options: ['Every tag must have a closing tag', 'JSX elements cannot have dynamic values', 'Only div tags can be used in JSX', 'JavaScript expressions cannot be used inside JSX'],
        answer: 'Every tag must have a closing tag'
      },
      {
        question: 'What is the proper way to reference a class name in JSX? ',
        options: ['class', 'className', 'cssClass', 'classID'],
        answer: 'className'
      },
      {
        question: 'Which of the following JSX code will render correctly in React?',
        options: ['<div class=`container`>Hello World!</div>', '<div class="container">Hello World!</div>', '<div className="container">Hello World!</div>', '<div classname="container">Hello World!</div>'],
        answer: '<div className="container">Hello World!</div>'
      },
      {
        question: 'In JSX, what happens if you include a JavaScript expression inside curly braces {}',
        options: ['It is treated as a string ', 'It gets ignored', 'It is evaluated and inserted into the JSX', 'It causes an error'],
        answer: 'It is evaluated and inserted into the JSX'
      }
    ],
    'Props': [
      {
       question: 'What are props in React?',
        options: ['Special JavaScript methods used for events', 'Arguments passed into React components from parent components', 'Functions used to modify the component state', 'Internal data used to store component-specific information'],
        answer: 'Arguments passed into React components from parent components'
      },
      {
       question: 'Which of the following is true about props in React?',
        options: ['Props are mutable and can be changed by the component', 'Props are passed from parent to child components', ' Props are not used for rendering dynamic content', 'Props are accessible only to functional components'],
        answer: 'Props are passed from parent to child components'
      },
      {
       question: 'How can a parent component pass data to a child component in React?',
        options: ['Using state', ' Using props', 'Using React hooks', 'Using local storage'],
        answer: 'Using props'
      },
      {
       question: 'What happens if you try to modify props inside a component? ',
        options: [' It will trigger a re-render', 'It causes an error because props are immutable', 'The component`s state will be automatically updated', 'The component will stop working'],
        answer: 'It causes an error because props are immutable'
      },
      {
       question: 'Which of the following is the correct way to pass a prop to a child component? `<ChildComponent propName="value" />`',
        options: ['<ChildComponent propName={value} />', '<ChildComponent value="propName" />', '<ChildComponent prop="value" />', '<ChildComponent propName="value" />'],
        answer: '<ChildComponent propName="value" />'
      }
    ],
    'State': [
      {
       question: 'What is the purpose of the state in React?',
        options: ['To store data that does not change', 'To manage the structure of the app', 'To store data that can change over time and triggers re-renders', 'To pass data between components'],
        answer: 'To store data that can change over time and triggers re-renders'
      },
      {
       question: 'Which hook do you use to add state in functional components? ',
        options: ['useEffect', 'useState', 'useContext', 'useReducer'],
        answer: 'useState'
      },
      {
       question: 'What does setState() do in React? A) It updates the component`s state and triggers a re-render',
        options: ['It updates the component`s state and triggers a re-render', 'It sets the initial state of a component', 'It resets the component`s state', 'It is used to clear all data in the component'],
        answer: 'It updates the component`s state and triggers a re-render'
      },
      {
       question: 'What is the output when you update the state in a React component? ',
        options: ['It rerenders the component and updates the UI', 'The state value is displayed as an alert', 'It throws an error and stops the app', 'It resets the component'],
        answer: 'It rerenders the component and updates the UI'
      },
      {
       question: 'In functional components, how do you access the current state value after it has been updated?',
        options: ['The state value is directly available after calling setState()', 'The state is automatically updated and available in the next render cycle', 'By calling the useEffect hook with the state as a dependency', 'By using componentDidUpdate() lifecycle method'],
        answer: 'The state is automatically updated and available in the next render cycle'
      }
      ]
  };

  const currentQuestion = quizQuestions[topic.name][currentQuestionIndex];

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < quizQuestions[topic.name].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Quiz over! Your score: ${score + (selectedAnswer === currentQuestion.answer ? 1 : 0)} / ${quizQuestions[topic.name].length}`);
    }
  };

  return (
    <div className="quiz">
      <p>{currentQuestion.question}</p>
      <div className="options">
        {currentQuestion.options.map((option, index) => (
          <button key={index} className="quiz-option" onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
