import { Link } from 'react-router-dom';
// import BookList from '../components/book/BookList';

function Home() {
  return (
    <>
      <div>
        <h2>Welcome to Dangalf&apos;s Library of Computer Science!</h2>
        <h3>Check out the amazing selection of books in our</h3><Link to="/books"><h3>catalog.</h3></Link>
      </div>
    </>
  );
}

export default Home;

