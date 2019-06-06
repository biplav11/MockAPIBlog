import React, { Component } from 'react'
import {Navbar, Form, FormControl, Container, Row, Col} from 'react-bootstrap'

export default class Main extends Component {
    render() {
        return (
            <div>
                <header>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="/">My Blogs</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <div className="mr-auto"></div>
                            <Form inline action="/search" method="GET">
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" name="q" />
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </header>

                <main>
                    { this.props.children}
                </main>
                
                <footer>
                    <Container fluid>
                        <Row>
                            <Col lg={6}>
                                &copy;Copyright {new Date().getFullYear()}. All Rights Reserved.
                            </Col>
                            <Col lg={6} className="text-right">
                                Made with love by Bishnu Raj Kumar Thapa
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        )
    }
}
