/* eslint-disable no-loop-func */
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import moment from 'moment';

import { showLoading, hideLoading } from "../actions/index";
import "./VehiculosTable.css";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, IconButton } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

class VehiculosTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: 10
        };
    }

    onClickEdit(v) {
        this.props.onClickEdit(v);
    }

    onClickRemove(v) {
        this.props.onClickRemove(v);
    }

    handleChangePage(event, newPage) {
        this.setState({ page: newPage });
    };

    handleChangeRowsPerPage(event) {
        this.setState({ rowsPerPage: parseInt(event.target.value, 10), page: 0 });
    };

    render() {
        var { vehiculos } = this.props;
        var { page, rowsPerPage } = this.state;
        return (
            <Fragment>
                <TableContainer component={Paper}>
                    <Table className="vehiculos-table" size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Pedido</TableCell>
                                <TableCell align="left">Bastidor</TableCell>
                                <TableCell align="left">Modelo</TableCell>
                                <TableCell align="left">Matricula</TableCell>
                                <TableCell align="left">Fecha Entrega</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {vehiculos.length > 0 &&
                                (rowsPerPage > 0 ? vehiculos.sort((a, b) => (a.numeroPedido > b.numeroPedido) ? 1 : -1).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : vehiculos).map((v) => (
                                    <TableRow key={v.numeroPedido}>
                                        <TableCell sortDirection="desc">{v.numeroPedido}</TableCell>
                                        <TableCell align="left">{v.bastidor}</TableCell>
                                        <TableCell align="left">{v.modelo}</TableCell>
                                        <TableCell align="left">{v.matricula}</TableCell>
                                        <TableCell align="left">{v.fechaEntrega ? moment(v.fechaEntrega).format("DD/MM/yyyy") : ""}</TableCell>
                                        <TableCell align="right" className="actions-cell">
                                            <IconButton onClick={() => this.onClickEdit(v)}>
                                                <Edit />
                                            </IconButton>
                                            <IconButton onClick={() => this.onClickRemove(v)}>
                                                <Delete />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    colSpan={3}
                    rowsPerPageOptions={[10, 50, { label: 'All', value: vehiculos.length }]}
                    count={vehiculos.length}
                    component="div"
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={this.handleChangePage.bind(this)}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage.bind(this)}
                />
            </Fragment>
        );
    }
}

const mapStatetoProps = state => {
    return {
        vehiculos: state.VehiculosReducer.vehiculos
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        showLoading: (value) => dispatch(showLoading(value)),
        hideLoading: () => dispatch(hideLoading()),
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(VehiculosTable);