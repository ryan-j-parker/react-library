import BookList from './components/book/BookList';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Book from './components/book/Book.js';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Switch>
        <Route exact path="/" component={BookList} />
        <Route path="/books" component={Book} />
      </Switch>
    </main>
  );
}

export default App;
