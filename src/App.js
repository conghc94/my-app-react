import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUserName: 'a',
      txtPassword: '',
      txtDescription: 'as',
      sltGender: 1
    };

    this.onHandleChange = this.onHandleChange.bind(this)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
  }

  onHandleChange(event){
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name] : value
    });
  }

  onHandleSubmit(event){
    event.preventDefault()
    console.log(this.state)
  }

  render(){
    return (
      <div className="container mt-30">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onHandleSubmit}>
                  <div className="form-group">
                    <label>Username: </label>
                    <input
                      type="text"
                      className="form-control"
                      name="txtUserName"
                      onChange={this.onHandleChange}
                      value={this.state.txtUserName}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password: </label>
                    <input
                      type="password"
                      className="form-control"
                      name="txtPassword"
                      onChange={this.onHandleChange}
                      value={this.state.txtPassword}
                    />
                  </div>
                  <div className="form-group">
                    <label>Description: </label>
                    <textarea
                      name="txtDescription"
                      className="form-control"
                      row="3"
                      onChange = {this.onHandleChange}
                      value={this.state.txtDescription}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label>Gender: </label>
                    <select
                      name="sltGender"
                      className="form-control"
                      value={this.state.sltGender}
                      onChange={this.onHandleChange}
                    >
                      <option value={0} selected={this.state === 0}>Male</option>
                      <option value={1} selected={this.state === 1}>Female</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Language: </label>
                    <br/>
                      <label>
                        <input
                          type="radio"
                          name="rdLanguage"
                          value="ja"
                          onChange={this.onHandleChange}
                        />
                          Japanese
                      </label>
                      <br/>
                      <label>
                        <input
                          type="radio"
                          name="rdLanguage"
                          value="en"
                          onChange={this.onHandleChange}
                        />
                        English
                      </label>
                  </div>
                  <button type="submit" className="btn btn-primary">Save</button>&nbsp;
                  <button type="reset" className="btn btn-default">Clear</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
