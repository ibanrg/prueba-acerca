/* eslint-disable no-loop-func */
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-flexbox-grid";

import { showLoading, hideLoading, vehiculosLoaded, showNewVehiculoDialog, showEditVehiculoDialog, closeDialog } from "../actions/index";
import * as vehiculosService from "../services/vehiculosService";
import "./Vehiculos.css";
import VehiculosTable from "./VehiculosTable";
import VehiculoForm from "./VehiculoForm";
import { Button } from '@material-ui/core';

class Vehiculos extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        this.props.showLoading("Loading...");
        var vehiculos = await this.getVehiculos();
        this.props.vehiculosLoaded(vehiculos);
        this.props.hideLoading();
    }

    async getVehiculos(userId) {
        return await vehiculosService.getAll();
    }

    addVehiculo() {
        this.props.showNewVehiculoDialog();
    }

    editVehiculo(v) {
        this.props.showEditVehiculoDialog(v);
    }

    async removeVehiculo(v) {
        this.props.showLoading("Deleting...");
        await vehiculosService.removeVehiculo(v);
        var vehiculos = await this.getVehiculos();
        this.props.hideLoading();
        this.props.vehiculosLoaded(vehiculos);
    }

    async saveVehiculo(v) {
        this.props.showLoading("Saving...");
        await vehiculosService.saveVehiculo(v);
        this.props.closeDialog();
        var vehiculos = await this.getVehiculos();
        this.props.hideLoading();
        this.props.vehiculosLoaded(vehiculos);
    }

    render() {
        return (
            <Fragment>
                <Row center="xs">
                    <Col xs={12} lg={10} xl={8}>
                        <Row start="xs">
                            <Col xs={6}>
                                <Button variant="contained" color="primary" onClick={this.addVehiculo.bind(this)}>Add</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br />
                <Row center="xs">
                    <Col xs={12} lg={10} xl={8}>
                        <VehiculosTable
                            onClickRemove={(v) => this.removeVehiculo(v)}
                            onClickEdit={(v) => this.editVehiculo(v)}
                        />
                    </Col>
                </Row>
                <VehiculoForm onSave={(v) => this.saveVehiculo(v)} />
            </Fragment>
        );
    }
}

const mapStatetoProps = state => {
    return {
        vehiculos: state.VehiculosReducer.vehiculos,
        mode: state.VehiculosReducer.mode,
        showDialog: state.VehiculosReducer.showDialog,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showLoading: (value) => dispatch(showLoading(value)),
        hideLoading: () => dispatch(hideLoading()),
        vehiculosLoaded: (value) => dispatch(vehiculosLoaded(value)),
        showNewVehiculoDialog: () => dispatch(showNewVehiculoDialog()),
        showEditVehiculoDialog: (value) => dispatch(showEditVehiculoDialog(value)),
        closeDialog: () => dispatch(closeDialog()),
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Vehiculos);