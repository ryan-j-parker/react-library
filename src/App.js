import BookList from './components/book/BookList.js';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Book from './components/book/Book.js';
import BookDetail from './components/book/BookDetail.js';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Switch>
        <Route path="/books" component={BookList} />
        <Route path="/books/:id" component={Book} />

      </Switch>
    </main>
  );
}

export default App;
