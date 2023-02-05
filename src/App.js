
import './App.css';
import Row from './Row';
import request from './request';
function App() {
  return (
    <div className="App">
      <h1>Lets Begin </h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchTrending}/>
      
      <Row title="Trending Now"/>
    </div>
  );
}

export default App;
