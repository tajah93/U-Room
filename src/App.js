import './App.css';
import Header from './components/Header/Header'; 
import Cards from './components/Cards/Cards';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 

function App() {
  return (
    <div className="App">
      <Header />
      <Router> 
      <header className="App-header">
       
       
        
        <Switch>
          
          <Route path= "/message">
          </Route>
          {/* homepage route always at the bottom */}
          <Route path= "/">
            <Cards />
          </Route>
        </Switch>

        

       
        </header>
        
        </Router>
    </div>
  );
}

export default App;