import './App.css';
import CardShrol from './components/CardShrol';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='block1'>        <a className='App-link' href='http://college.mlyniv.rv.ua/'>
          РДГУ
        </a>
        </div>
        <div className='block2'>
          <span>ГРУПА ЦТ-31, ЦТ-21 (3 р.н.) </span>
        </div>
      </header>
      <main>
        
        <CardShrol/>
        <hr/>
        <h2>Список студентів</h2>
        {/* карти студентів */}


      </main>
    </div>
  );
}

export default App;
