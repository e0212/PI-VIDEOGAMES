
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './components/Landing/LandingPage';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Formulario from './components/Form/Formu';

function App() {
  return (

    <Route > 
      <Switch>
        
        <Route exact path= "/" component={LandingPage} /> 
        <Route exact path= "/Form" component={Formulario} /> 
        <Route exact path= "/home" component={Home} />
        <Route exact path= "/detail/:id" component={Detail} />


      </Switch>
    </Route>

  );
}

export default App;

