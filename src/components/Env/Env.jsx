import classes from './Env.module.scss';

const API_BASE_PATH = import.meta.env.VITE_API_BASE_PATH;
console.log(API_BASE_PATH);

export const Env = () => {
  return <div className={classes.Env}>Env</div>;
};
