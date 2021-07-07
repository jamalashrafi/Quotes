import { Route, Switch, Redirect } from 'react-router-dom';
// import Welcome from './pages/Welcome';
import AddQuote from './pages/AddQuote';
import AllQuotes from './pages/AllQuotes';
import SpecificQuote from './pages/SpecificQuote';
import Layout from './components/Layout';
// function App() {
//   return (
//     <div className="App">

//       <Route path='/' component={Welcome} />
//       <Route path='/add-a-quote' exact component={AddQuote} />
//       <Route path='/all-quotes' exact component={AllQuotes} />
//       <Route path='/all-quotes/:quote' component={SpecificQuote} />

//     </div>
//   );
// }

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact >
          <Redirect to='/all-quotes' />
        </Route>
        <Route path='/add-a-quote' exact component={AddQuote} />
        <Route path='/all-quotes' exact component={AllQuotes} />
        <Route path='/all-quotes/:quote' component={SpecificQuote} />
      </Switch>
    </Layout>
  )
}

export default App;
