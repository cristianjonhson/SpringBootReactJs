import React, { useState, useCallback, useRef, useEffect } from 'react';
import Form from '../components/TitleForm';
import UserCard from '../components/UserCard';
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
      // Agregar ID basado en índice si no existe
      const usersWithIds = (res.data || []).map((user, index) => ({
        ...user,
        id: user.id ?? index + 1
      }));
      if (mountedRef.current) setUsers(usersWithIds);
      console.log('fetchUsers response:', usersWithIds);
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
    <div className="container my-4">
      <Form username="Obtener Usuarios" />

      <div className="form-container mb-3">
        <form onSubmit={handleSubmit}>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Cargando...
              </>
            ) : (
              'Obtener'
            )}
          </button>
        </form>
      </div>

      {error && (
        <div className="alert alert-danger" role="alert">
          {String(error)}
        </div>
      )}

      <div className="row">
        {users.length === 0 && !loading && !error && (
          <div className="col-12">
            <div className="alert alert-secondary">No hay usuarios. Pulsa "Obtener" para cargar datos.</div>
          </div>
        )}

        {users.map((user, i) => (
          <div className="col-12 col-md-6 col-lg-4 mb-3" key={user && (user.id ?? `${user.email || 'u'}-${i}`)}>
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotonIndex;
