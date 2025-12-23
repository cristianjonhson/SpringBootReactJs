import React from 'react';

function UserCard({ user }) {
  return (
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
  );
}

export default UserCard;
