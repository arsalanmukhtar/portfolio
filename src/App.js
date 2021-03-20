import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages';
import Contact from './pages/contact';
import Service1Page from './pages/Service1Page';
import Service2Page from './pages/Service2Page';
import Service3Page from './pages/Service3Page';
import Service4Page from './pages/Service4Page';
import Service5Page from './pages/Service5Page';
import Service6Page from './pages/Service6Page';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/service1" component={Service1Page} exact />
        <Route path="/service2" component={Service2Page} exact />
        <Route path="/service3" component={Service3Page} exact />
        <Route path="/service4" component={Service4Page} exact />
        <Route path="/service5" component={Service5Page} exact />
        <Route path="/service6" component={Service6Page} exact />
      </Switch>
    </Router>
  );
}

export default App;
