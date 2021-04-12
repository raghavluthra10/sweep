import './App.css'
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import Feed from './Feed';

function App() {
  return (
    <div className="App">
   
    {/* sidebar */}
    <Sidebar  />

    {/* feed(posts) */}
    <Feed  />
   
    {/* widgets */}
    <Widgets  />


    </div>
  );
}

export default App;
