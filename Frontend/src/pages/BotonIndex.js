import React from 'react';
import Form from '../components/TitleForm';
import axios from 'axios';

class BotonIndex extends React.Component {
  state = {
    name: '',
    username: '',
    company: '',
    email: '',
    users: [],
  };

  getUsers = async () => {
    console.log('getUsers: llamando a backend /users');
    try {
      const res = await axios.get('http://localhost:8765/users');
      console.log('getUsers: respuesta recibida', res.data && res.data.length);
      this.setState({ users: res.data });
    } catch (err) {
      console.error('getUsers: error', err && (err.response || err.message || err));
    }
  };

  componentDidMount() {
    console.log('BotonIndex montado');
    // opcional: precargar usuarios
    // this.getUsers();
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log('state', this.state);
    try {
      const res = await axios.get('http://localhost:8765/users');
      this.setState({ users: res.data, name: '', username: '', company: '', email: '' });
      console.log('respuesta axios', res.data);
    } catch (error) {
      console.log(error.response || error);
    }
  };

  render() {
    return (
      <div>
        <Form username="Obtener Usuarios" />
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <button type="submit" className="btn btn-primary">
              Obtener
            </button>
          </form>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {this.state.users.map((user, i) => (
              <li
                className="list-group-item list-group-item-action"
                key={user && (user.id ?? `${user.email || 'u'}-${i}`)}
              >
                Name: {user.name}
                <br />
                Username: {user.username}
                <br />
                Name Company: {user.company?.name}
                <br />
                Email: {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default BotonIndex;
