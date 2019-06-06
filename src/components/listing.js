import React, { Component } from 'react'
import MainLayout from './layout/Main'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Axios from 'axios';
import {Link} from 'react-router-dom'

export default class listing extends Component {
    state ={
        blogs: []
    }
    componentDidMount(){
        Axios.get('https://5b8971636b7dcb0014d5f3f1.mockapi.io/blogs')
        .then((data)=>{
            this.setState({
                blogs: data.data
            })
        })
    }
    render() {
        console.log(this.state)
        return (
            <MainLayout>
                <Container>
                    <h1 className="listing-title">All Blogs</h1>
                    <Row>
                        {
                            this.state.blogs.map((blog) => {
                                return(
                                    <Col key={blog.id} lg={4}>
                                        <Card>
                                            <Card.Img variant="top" src={blog.thumbnail} />
                                            <Card.Body>
                                                <Card.Title>{blog.title}</Card.Title>
                                                <Card.Text>
                                                    {blog.desc}
                                                </Card.Text>
                                                <Link className="card-link" to={'/blog/'+blog.id}>Read More</Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                        

                    </Row>
                </Container>
            </MainLayout>
        )
    }
}
