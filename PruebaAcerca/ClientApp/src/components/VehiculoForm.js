/* eslint-disable no-loop-func */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-flexbox-grid";
import moment from 'moment';

import { showLoading, hideLoading, closeDialog } from "../actions/index";
import "./Vehiculos.css";
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

class VehiculoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehiculo: {
                id: null,
                numeroPedido: null,
                bastidor: null,
                modelo: null,
                matricula: null,
                fechaEntrega: null,
            },
        };
    }

    async componentDidMount() { }

    componentDidUpdate(prevProps, props) {
        let { mode, vehiculo } = this.props;
        if (prevProps.vehiculo != vehiculo) {
            if (mode == "EDIT") {
                let v = {};
                v = Object.assign(v, vehiculo);
                this.setState({ vehiculo: v });
            }
            else {
                this.setState({
                    vehiculo: {
                        id: null,
                        numeroPedido: null,
                        bastidor: null,
                        modelo: null,
                        matricula: null,
                        fechaEntrega: null,
                    }
                });
            }
        }
    }

    onChangeInput(field, e) {
        let { vehiculo } = this.state;
        vehiculo[field] = e.target.value;
        this.setState({ vehiculo });
    }

    handleClose() {
        this.props.closeDialog();
    }

    saveVehiculo() {
        let { vehiculo } = this.state;
        this.props.onSave(vehiculo);
    }

    render() {
        let { showDialog, mode } = this.props;
        let { vehiculo } = this.state;
        return (
            <Dialog open={showDialog} onClose={this.handleClose.bind(this)}>
                <DialogTitle id="dialog-title">{mode}</DialogTitle>
                <DialogContent>
                    <Row center="xs">
                        <Col xs={12} md={10}>
                            <Row>
                                <TextField name="numeroPedido" label="Pedido" variant="outlined" value={vehiculo.numeroPedido} onChange={(e) => this.onChangeInput("numeroPedido", e)} />
                            </Row>
                            <br />
                            <Row>
                                <TextField name="bastidor" label="Bastidor" variant="outlined" value={vehiculo.bastidor} onChange={(e) => this.onChangeInput("bastidor", e)} />
                            </Row>
                            <br />
                            <Row>
                                <TextField name="modelo" label="Modelo" variant="outlined" value={vehiculo.modelo} onChange={(e) => this.onChangeInput("modelo", e)} />
                            </Row>
                            <br />
                            <Row>
                                <TextField name="matricula" label="Matricula" variant="outlined" value={vehiculo.matricula} onChange={(e) => this.onChangeInput("matricula", e)} />
                            </Row>
                            <br />
                            <Row>
                                <TextField
                                    id="date"
                                    name="fechaEntrega"
                                    label="Fecha de entrega"
                                    type="date"
                                    value={vehiculo.fechaEntrega ? moment(vehiculo.fechaEntrega).format("yyyy-MM-DD") : ""}
                                    onChange={(e) => this.onChangeInput("fechaEntrega", e)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Row>
                            <br />
                        </Col>
                    </Row>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.saveVehiculo.bind(this)}>Save</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

const mapStatetoProps = state => {
    return {
        mode: state.VehiculosReducer.mode,
        showDialog: state.VehiculosReducer.showDialog,
        vehiculo: state.VehiculosReducer.vehiculo,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showLoading: (value) => dispatch(showLoading(value)),
        hideLoading: () => dispatch(hideLoading()),
        closeDialog: () => dispatch(closeDialog())
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(VehiculoForm);