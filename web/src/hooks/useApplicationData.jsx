import { useState, useEffect } from 'react';
import axios from '../api/axios';

export default function useApplicationData(initial) {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get('/repos')
      .then((details) => {
        console.log(details);
        setState(details.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return { state };
}
