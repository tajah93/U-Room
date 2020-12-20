import './App.css';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import MatchBtns from './components/MatchBtns/MatchBtns';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Header returnHist="/" />
        <header className="App-header">
          <Switch>
            <Route path="/message">
              <Messages />
            </Route>
            {/* homepage route always at the bottom */}
            <Route path="/">
              
              <Cards />
              <MatchBtns />
            </Route>
          </Switch>
        </header>
      </Router>
    </div>
  );
}

export default App;