import React, { Component } from "react";
import { Card } from "reactstrap";
import "./../../css/login.css";
import { Link, Redirect } from "react-router-dom";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {
        email: "",
        password: "",
      },
      loginSuccess: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //it was called when input was chaged
  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.validation(name, value);
    console.log("nameeeee", name, value);

    this.setState({ [event.target.name]: event.target.value });
  }

  // it was called when form submitted
  handleSubmit = async (event) => {
    let { email, password, errors } = this.state;
    event.preventDefault();
    if (!errors["email"] && !errors["password"]) {
      this.setState({ loginSuccess: true });
    }
  };

  //validation for input  fields
  validation = (name, value) => {
    let { errors } = this.state;
    switch (name) {
      case "email": {
        if (value == null || value.length == 0) {
          errors[name] = "Please Fill the Field";
        } else if ((value && !value.includes("@")) || !value.includes(".")) {
          errors[name] = "Invalid email";
        } else if (value && value.includes("@") && value.includes(".")) {
          errors[name] = null;
        }
      }
      case "password": {
        if (value == null || value.length == 0) {
          errors[name] = "Please Fill the Field";
        }
      }
    }
    this.setState({ errors: errors });
  };
  render() {
    let { errors, loginSuccess } = this.state;
    console.log("errros", errors);
    return (
      <div className="login">
        {loginSuccess ? <Redirect to="/home" /> : null}
        <Card className="login-card">
          <h3 className="text-center"> Login</h3>
          <form onSubmit={this.handleSubmit} noValidate={true}>
            <div className="form-group">
              <label>Email:</label>
              <div>
                <input
                  name="email"
                  type="text"
                  value={this.state.email}
                  onChange={this.handleChange}
                  className="form-control"
                  noValidate
                  //   validate={(e) => this.validation(e)}
                />
              </div>
              {errors && errors["email"] && (
                <label className="error">{errors["email"]} </label>
              )}
            </div>
            <div className="form-group">
              <label>Password:</label>
              <div>
                <input
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  className="form-control"
                  noValidate

                  //   validate={true}
                />
              </div>
              {errors && errors["password"] && (
                <label className="error">{errors["password"]} </label>
              )}
            </div>
            <input type="submit" value="Submit" className="btn btn-primary" />
          </form>
        </Card>
      </div>
    );
  }
}
