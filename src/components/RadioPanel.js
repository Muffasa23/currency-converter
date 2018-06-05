import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeChartOption } from '../actions/Chart';


class RadioPanel extends Component{
    constructor(props){
        super(props);

        this.handleRadioClick = this.handleRadioClick.bind(this);
    }
    //onClick={(e) => this.handleRadioClick(e)}
    render(){
        return(
            <div className="RadioPanel" >
                <label htmlFor="rdo-1" className="btn-radio" >
                <input type="radio" id="rdo-1" name="radio-grp" value="30" onClick={(e) => this.handleRadioClick(e, 30)} defaultChecked/>
                <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="9"></circle>
                    <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                    <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                </svg>
                <span>30 Days</span>
                </label>
                <label htmlFor="rdo-2" className="btn-radio" onclick="handelRadioClick(this);">
                <input type="radio" id="rdo-2" name="radio-grp" value="60" onClick={(e) => this.handleRadioClick(e, 60)}/>
                <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="9"></circle>
                    <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                    <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                </svg>
                <span>60 Days</span>
                </label>
                <label htmlFor="rdo-3" className="btn-radio">
                <input type="radio" id="rdo-3" name="radio-grp" value="90" onClick={(e) => this.handleRadioClick(e, 90)}/>
                <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="9"></circle>
                    <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                    <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                </svg>
                <span>90 Days</span>
                </label>
            </div>
        )
    }

    handleRadioClick(e, option){
        //console.log(option.toString())
        this.props.changeOption(option.toString())
    }
}



function mapDispatchToProps(dispatch) {
    return{
        changeOption: (option) => {
            dispatch(changeChartOption(option));
        }
    };
}

export default connect(null, mapDispatchToProps)(RadioPanel);
