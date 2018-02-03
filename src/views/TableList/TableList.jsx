import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';
import {thArray, tdArray} from 'variables/Variables.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';

class TableList extends Component {

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="VISITS DATA"
                                category="Raw data about each visits"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                {
                                                    thArray.map((prop, key) => {
                                                        return (
                                                        <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                tdArray.map((prop,key) => {
                                                    return (
                                                        <tr key={key}>{
                                                            prop.map((prop,key)=> {
                                                                return (
                                                                    <td  key={key}>{prop}</td>
                                                                );
                                                            })
                                                        }</tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <Button
                            bsStyle="info"
                            pullRight
                            fill
                            type="submit"
                        >
                            Download Data as CSV
                        </Button>
                      </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default TableList;
