import { Switch, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import AddQuote from './pages/AddQuote';
import AllQuotes from './pages/AllQuotes';
function App() {
  return (
    <div className="App">

      <Route path='/' component={Welcome} />
      <Route path='/add-a-quote' exact component={AddQuote} />
      <Route path='/all-quotes' exact component={AllQuotes} />

    </div>
  );
}

export default App;
