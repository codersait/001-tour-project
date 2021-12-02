// import './App.css';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import { data } from './helper/data';


function App() {
  console.log(data);
  return (
    <div className="app">
      <Header />
      <h2 className="title">POPULAR TOUR PLACES</h2>
      <div className="grid">
        {data.map(card => {
          return <Card key={card.id} card={card} />
        })}
      </div>
    </div>
  );
}

export default App;
