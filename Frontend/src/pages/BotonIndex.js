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
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex gap-3 align-items-start">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'User')}&background=0D8ABC&color=fff&rounded=true&size=64`}
                  alt={user?.name || 'avatar'}
                  className="rounded-circle"
                  style={{ width: 64, height: 64, objectFit: 'cover' }}
                />
                <div className="flex-grow-1">
                  <h5 className="card-title mb-1">{user?.name || '—'}</h5>
                  <p className="mb-1">
                    <span className="badge bg-secondary me-2">@{user?.username || '—'}</span>
                    <small className="text-muted">{user?.email || '—'}</small>
                  </p>
                  <p className="mb-0"><strong>Compañía:</strong> {user?.company?.name || 'N/A'}</p>
                </div>
              </div>
              <div className="card-footer bg-transparent">
                <small className="text-muted">ID: {user?.id ?? '—'}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotonIndex;
