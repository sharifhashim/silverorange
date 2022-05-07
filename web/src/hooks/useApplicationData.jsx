import { useState, useEffect } from 'react';
import axios from '../api/axios';

export default function useApplicationData(initial) {
  const [state, setState] = useState([]);
  const [stateCopy, setStateCopy] = useState([]);
  useEffect(() => {
    axios
      .get('/repos')
      .then((details) => {
        const sorted = details.data
          .sort((a, b) => {
            return new Date(a.created_at) - new Date(b.created_at);
          })
          .reverse();
        setState(sorted);
        setStateCopy(sorted);
      })
      .catch((err) => console.log(err));
  }, []);
  return { state, setState, stateCopy, setStateCopy };
}
