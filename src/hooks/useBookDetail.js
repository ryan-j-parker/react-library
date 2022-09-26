import { useEffect, useState } from 'react';
import { getBookById } from '../services/books';

export function useBookDetail({ id }) {
  const [book, setBook] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBookById(id);
        setBook(data);
        setLoading(true);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, [id]);

  return { book, error, loading };
}
