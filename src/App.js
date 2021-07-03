
import './App.css';
import Row from './Row'
import request from './requests';
import Banner from './Banner'; 
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>

      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals}
      isLargeRow/>
      <Row title="Trending Now" fetchUrl={request.fetchTrebding} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovie} />
      <Row title="Commedy Movies" fetchUrl={request.fetchComedyMovie} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovie} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovie} />
      <Row title="Documentary" fetchUrl={request.fetchDocumentaries} />
    
    </div>
  );
}

export default App;
