import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Switch>{/* Route's */}</Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
