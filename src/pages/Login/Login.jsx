import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
import { Form, Image, Container, Button, Card } from 'semantic-ui-react'
import './login.css'

class Login extends Component {
  state = {
    email: "",
    pw: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.login(this.state);
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      alert('Invalid Credentials!');
    }
  };

  render() {
    const {email, pw} = this.state
    return (
      <Container id="mess">
        <br/><br/><br/><br/><br/>
        <Card fluid id="lc">
          <Image id="image"src="https://www.bates.edu/wordpress/files/2016/07/texture-16.jpg" /> <br/>
          <Card.Header id="hdf">Log In</Card.Header><br/>
          <Form autoComplete="off" onSubmit={this.handleSubmit}>
          <br/> 
            <Form.Field>
            <input
              type="text"
              autoComplete="off"
              id="email"
              value={email}
              name="email"
              onChange={this.handleChange}
            />
            <label htmlFor="email">Email</label>
            </Form.Field>
            <br/>
            <Form.Field>
            <input
              type="password"
              autoComplete="off"
              id="password"
              value={pw}
              name="pw"
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
            </Form.Field> <br/> 
            <Button>Log In</Button>&nbsp;&nbsp;&nbsp;
            <Link className="btn red" to="/signup">
              <Button>Signup</Button>
            </Link>
            <br/> <br/> <br/> <br/> 
          </Form>
        </Card>
      </Container>
    );
  }
}

export default Login;