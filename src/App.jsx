import { Header } from './components/Header';
import { CoreConcept } from './components/CoreConcept';
import { CORE_CONCEPTS } from './data';
import TabButton from './TabButton';
import TopicContent from './TopicContent';
import { useState } from 'react';
import { EXAMPLES } from './data';
import  Quiz  from './Quiz';


function App() {
  const [selectedTopic, letSelectedTopic] = useState('');
  const [selectedTopicc, setSelectedTopic] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const topics = [
    { name: 'Components', content: 'Learn the basics of JavaScript, such as variables, data types, and functions.' },
    { name: 'JSX', content: 'Introduction to React, including components, hooks, and state management.' },
    { name: 'Props', content: 'Overview of common data structures like arrays, linked lists, and trees.' },
    { name: 'State', content: 'Learn basic algorithms such as sorting, searching, and recursion.' }
  ];

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setShowQuiz(false);
  };

  const handleQuizStart = () => {
    setShowQuiz(true);
  };

  function HandleSelect(selectedButton) {
    letSelectedTopic(selectedButton);
    
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core React Introduction</h2>
          <ul>
            {CORE_CONCEPTS.map((item)=>(<CoreConcept {...item}/>))}
        
            </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected = { selectedTopic=== 'components'} onSelect={()=>HandleSelect('components')}>Components</TabButton>
            <TabButton isSelected = { selectedTopic=== 'jsx'} onSelect={()=>HandleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected = { selectedTopic=== 'props'} onSelect={()=>HandleSelect('props')}>Props</TabButton>
            <TabButton isSelected = { selectedTopic=== 'state'} onSelect={()=>HandleSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic?<p>please select topic name to see examples</p>: null}
          {selectedTopic ?<div id="tab-content">
            
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
            <code>{EXAMPLES[selectedTopic].code}</code></pre> 
         </div> : null}
        </section>
        <section id="examples">
          <h2>Quiz</h2>
          <menu>
            {topics.map((topic, index, isSelectedd) => (
              <button key={index} className="active" onClick={() => handleTopicClick(topic)}>
            {topic.name}
          </button>
        ))}
          </menu>
          {!selectedTopicc?<p>please select topic name to start quiz</p>: null}
          {selectedTopicc && !showQuiz && (
        <TopicContent topic={selectedTopicc} onStartQuiz={handleQuizStart} />
      )}

      {showQuiz && <Quiz topic={selectedTopicc} />}
        </section>
      </main>
    </div>
  );
}

export default App;

