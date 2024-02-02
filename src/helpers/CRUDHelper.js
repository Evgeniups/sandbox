import {useState, useEffect} from 'react';

const CRUDHelper = ({apiEndpoint}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(apiEndpoint);
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const createData = async newData => {
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });

      const result = await response.json();
      setData([...data, result]);
    } catch (error) {
      setError(error);
    }
  };

  const updateData = async (id, updatedData) => {
    try {
      const response = await fetch(`${apiEndpoint}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      const result = await response.json();
      const updatedList = data.map(item => (item.id === id ? result : item));
      setData(updatedList);
    } catch (error) {
      setError(error);
    }
  };

  const deleteData = async id => {
    try {
      await fetch(`${apiEndpoint}/${id}`, {
        method: 'DELETE',
      });

      const updatedList = data.filter(item => item.id !== id);
      setData(updatedList);
    } catch (error) {
      setError(error);
    }
  };

  return {
    data,
    loading,
    error,
    createData,
    updateData,
    deleteData,
  };
};

export default CRUDHelper;
