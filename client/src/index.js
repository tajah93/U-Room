import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// import * as serviceWorker from './serviceWorker';
// import Firebase, { FirebaseContext } from './components/config/firebase';
import registerServiceWorker from './registerServiceWorker';
 
// ReactDOM.render(
//   <FirebaseContext.Provider value={new Firebase()}>
//     <App />
//   </FirebaseContext.Provider>,
//   document.getElementById('root'),
// );
 
// serviceWorker.unregister();



ReactDOM.render( <App /> , document.getElementById('root'));

registerServiceWorker();

