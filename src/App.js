import BookList from './components/book/BookList';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Book from './components/book/Book';
import BookDetail from './components/book/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <>
      <h1>Alchemy React Library</h1>
      <Switch>
        <Route path="/books/:id" component={BookDetail} />
        <Route path="/books" component={Book} />
        <Route path="/" component={BookList} />
      </Switch>
    </>
  );
}

export default App;
