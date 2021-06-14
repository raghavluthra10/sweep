import './App.css'
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import Feed from './Feed';
import Bookmarks from './Bookmarks';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar  />
        <Switch>
          <Route path='/' exact> <Feed  /> </Route>
          <Route path='/bookmarks' exact > <Bookmarks  /> </Route>
        </Switch>
        <Widgets  />
      </Router>
    </div>
  );
}

export default App;

