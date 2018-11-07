import React, { Component } from 'react';
import './App.css';

class App extends Component {


  render(){
    return (
      <div className="container mt-30">
        <div className="text-center">
          <h1>Works management</h1>
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">Add work<span class="fa fa-times-circle text-right"></span></h3>
              </div>
              <div className="panel-body">
                <form>
                  <div className="form-group"><label>Name :</label><input type="text" className="form-control" name="name" value="" />

                  </div>
                  <label>Status :</label>
                  <select className="form-control" name="status">
                    <option value="true">Active</option>
                    <option value="false">Hidden</option>
                  </select>
                  <br />
                    <div className="text-center">
                      <button type="submit" className="btn btn-warning">
                        <span class="fa fa-plus mr-5"></span>Add
                      </button>&nbsp;<button type="button" class="btn btn-danger">
                        <span class="fa fa-close mr-5"></span>Cancel
                      </button>
                    </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
              <span class="fa fa-plus mr-5"></span>Add work
            </button>
            <div className="row mt-15">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                  <input type="text" name="keyword" value="" class="form-control" placeholder="Enter keywords..." />
                    <span className="input-group-btn">
                      <button class="btn btn-primary" type="button">
                        <span class="fa fa-search mr-5"></span>Search
                    </button>
                    </span>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort
                    <span class="fa fa-caret-square-o-down ml-5"></span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a role="button" className="sort_selected"><span className="fa fa-sort-alpha-asc pr-5">Name A-Z</span></a></li>
                    <li><a role="button" className=""><span className="fa fa-sort-alpha-desc pr-5">Name Z-A</span></a></li>
                    <li role="separator" className="divider"></li>
                    <li><a role="button" className="">Status active</a></li>
                    <li><a role="button" className="">Status hidden</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                  <thead>
                  <tr>
                    <th className="text-center">Index</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td></td>
                    <td><input type="text" className="form-control" name="filterName" /></td>
                    <td>
                      <select className="form-control" name="filterStatus">
                        <option value="-1">All</option>
                        <option value="0">Hidden</option>
                        <option value="1">Active</option>
                      </select>
                    </td>
                    <td></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
