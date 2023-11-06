import {useContext} from 'react';
import BooksContext from '../components/context/books';

export default function useBooksContext(){
    return useContext(BooksContext)
  }