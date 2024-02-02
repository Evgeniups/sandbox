import CRUDHelper from '../../helpers/CRUDHelper';
import classes from './Crud.module.scss';

const Crud = () => {
  const {data, loading, error, createData, updateData, deleteData} = CRUDHelper({
    apiEndpoint: import.meta.env.VITE_API_BASE_PATH + '/user',
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className={classes.Temp}>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.name} - <button onClick={() => updateData(item.id, {name: 'Administrator'})}>Level Up</button>
            <button onClick={() => deleteData(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => createData({name: 'User'})}>Create</button>
    </div>
  );
};

export {Crud};
