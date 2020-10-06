import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import Loading from "./components/Loading/Loading";

import { showLoading, hideLoading } from "./actions";
import { connect } from "react-redux";
import Vehiculos from "./components/Vehiculos";


class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" component={Vehiculos} />
                    </Switch>
                </Router>
                <Loading />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showLoading: value => dispatch(showLoading(value)),
        hideLoading: () => dispatch(hideLoading())
    };
};

export default connect(null, mapDispatchToProps)(App);
