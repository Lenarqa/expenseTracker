import logo from './logo.svg';
import './App.css';

function App() {
  const para = document.createElement('p');
  para.textContent = "some text"; 
  document.getElementById('root').append(para);
  return (
    <div>
      <h2>Let's learn React!</h2>
    </div>
  );
}

export default App;
