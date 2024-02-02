import {useEffect, useState} from 'react';
import classes from './Env.module.scss';

const API_BASE_PATH = import.meta.env.VITE_API_BASE_PATH;

const Env = () => {
  const [user, setUser] = useState('');
  useEffect(() => {
    fetch(API_BASE_PATH)
      .then(data => data.json())
      .then(user => setUser(user));
  }, []);
  return <div className={classes.Env}>Env {user.env} </div>;
};
export {Env};
