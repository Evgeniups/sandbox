import {Crud} from './components/Crud/Crud';
// import {Env} from './components/Env/Env';

import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.App}>
      {/* <Env />; */}
      <Crud />
    </div>
  );
}

export default App;
