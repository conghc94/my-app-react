import React, { Component } from 'react';
import './components/SettingColor';
import SettingColor from "./components/SettingColor";

class Exercise extends Component {
    render() {
        return (
            <div className="container mt-50">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="panel panel-primary">
                        <div className="panel-heading">Color Picker</div>
                        <div className="panel-title"></div>
                    </div>

                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"></div>
            </div>
        );
    }
}

export default Exercise;
