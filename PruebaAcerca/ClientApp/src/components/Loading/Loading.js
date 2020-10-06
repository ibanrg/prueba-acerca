import React from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { CircularProgress } from '@material-ui/core';


import "./Loading.css";

class Loading extends React.Component {
    componentDidMount() { }

    componentWillUnmount() { }

    render() {
        // const { language } = this.context;
        const { show, message } = this.props;
        return (
            show && (
                <div className="loader-container">
                    <div className="spinner-container">
                        <CircularProgress size={30}/>
                        <br/>
                        <span className="loader-text">{message}</span>
                    </div>
                </div>
            )
        );
    }
}

Loading.propTypes = {
    show: Proptypes.bool,
    message: Proptypes.string
};

const mapStatetoProps = state => {
    return {
        show: state.LoadingReducer.loading,
        message: state.LoadingReducer.message
    };
};

export default connect(mapStatetoProps)(Loading);
