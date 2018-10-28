import React,{ Component } from 'react';

class Reset extends Component {
    onSettingDefault = () =>{
        this.props.onSettingDefault();
    }
    render() {
        return (
            <button type="button" className="btn btn-primary" onClick={this.onSettingDefault}>
                Reset
            </button>
        );
    };
}

export default Reset;