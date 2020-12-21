import './App.css';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Messages from './components/Messages/Messages';
import MatchBtns from './components/MatchBtns/MatchBtns';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile';
import UserProvider from "./providers/UserProvider";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = null;
  return (
    <div className="App">

      <Router>
        <Header returnHist="/" />
        <header className="App-header">
          <Switch>
            <Route path="/message">
              <Messages />
            </Route>
            <UserProvider>
              
            user ?
            <Profile />
            :
            <Route path="/profile">
              <SignIn />

            </Route>
            <Route path="/SignUp">
              <SignUp />
              </Route> 
              </UserProvider>

            
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