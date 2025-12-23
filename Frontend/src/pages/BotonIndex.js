import React, { useState, useCallback, useRef, useEffect } from 'react';
import Form from '../components/TitleForm';
import axios from 'axios';

function BotonIndex() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ref para saber si el componente está montado y evitar setState después de un unmount
  const mountedRef = useRef(true);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get('http://localhost:8765/users');
      if (mountedRef.current) setUsers(res.data || []);
    } catch (err) {
      console.error('fetchUsers error:', err && (err.response || err.message || err));
      if (mountedRef.current) setError(err && (err.message || 'Error al obtener usuarios'));
    } finally {
      if (mountedRef.current) setLoading(false);
    }
  }, []);

  // opción: precargar usuarios al montar
  // useEffect(() => { fetchUsers(); }, [fetchUsers]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchUsers();
  };

  return (
    <div>
      <Form username="Obtener Usuarios" />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Cargando...' : 'Obtener'}
          </button>
        </form>
      </div>

      <div className="list-wrapper">
        <ul className="list-group">
          {error && (
            <li className="list-group-item list-group-item-danger">Error: {error}</li>
          )}

          {users.length === 0 && !loading && !error && (
            <li className="list-group-item">No hay usuarios. Pulsa "Obtener".</li>
          )}

          {users.map((user, i) => (
            <li
              className="list-group-item list-group-item-action"
              key={user && (user.id ?? `${user.email || 'u'}-${i}`)}
            >
              <p><strong>Name:</strong> {user?.name}</p>
              <p><strong>Username:</strong> {user?.username}</p>
              <p><strong>Company:</strong> {user?.company?.name || 'N/A'}</p>
              <p><strong>Email:</strong> {user?.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BotonIndex;
