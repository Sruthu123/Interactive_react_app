export default function TopicContent ({ topic, onStartQuiz }){
  return (
    <div id="tab-content">
      <h3>{topic.name}</h3>
      <p>{topic.content}</p>
      <button className="start-quiz-button" onClick={onStartQuiz}>Test Your Knowledge</button>
    </div>
  );
};