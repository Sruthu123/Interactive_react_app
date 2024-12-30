import rLogo from '../assets/brain_logo.png';
const l = ['core', 'Fundamental', 'Essential'];
function randomNum(max) {
  return Math.floor(Math.random() * (max + 1));
}
export function Header() {
  const key = l[randomNum(2)];
  return (
    
    <header>
        <img src={rLogo} alt="Stylized atom" />
        <h1>Interactive React Learning Platform</h1>
        <p>
        {key} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}