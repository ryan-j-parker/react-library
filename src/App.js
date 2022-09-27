import BookList from './components/book/BookList';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import BookDetail from './components/book/BookDetail';
import Home from './components/Home';

function App() {
  // TODO: Add routes to books & views
  return (
    <>
      <h1>Alchemy React Library</h1>
      <Switch>
        <Route path="/books/:id" component={BookDetail} />
        <Route path="/books/" component={BookList} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
