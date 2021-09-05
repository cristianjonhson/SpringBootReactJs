import React from "react";
import Form from "../components/TitleForm";
import axios from "axios";


class BotonIndex extends React.Component {
  
  state = {
    name:'',
    username: '',
    company: '',
    email:'',
    users: []
}  

getUsers = async () => {
  const res = await axios.get('http://localhost:8765/users');
  this.setState({
      users: res.data
  });
}

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("state", this.state);
    try {
      const res = await axios.get(
        "http://localhost:8765/users")
        this.setState({
          users: res.data
      });
      console.log("respuesta axios", res.data);
      this.setState({ name: '' });
      this.setState({ username: '' });
      this.setState({ company: '' });
      this.setState({ email: '' });
        this.getUsers();
  }           
    catch (error) {
      console.log(error.response);
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
        <div className="col-md-8" >
        <ul className="list-group">
            {
                this.state.users.map(user => (
                    <li className="list-group-item list-group-item-action"
                    key={user.id} >
                    Name: {user.name}<br /> 
                    Username: {user.username}<br /> 
                    Name Company: {user.company.name}<br />  
                    Email: {user.email}
                    </li>
                ))
            }
        </ul>
    </div>
      </div>
    );
  }
}

export default BotonIndex;
