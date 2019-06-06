import React, { Component } from 'react'
import MainLayout from './layout/Main';
import { Container } from 'react-bootstrap';
import Axios from 'axios'

export default class detail extends Component {
    state = {
        blog: {}
    }
    componentDidMount(){
        Axios.get('https://5b8971636b7dcb0014d5f3f1.mockapi.io/blogs/'+this.props.match.params.id)
        .then((data)=>{
            this.setState({
                blog: data.data
            })
        })
    }
    render() {
        let {title, thumbnail, desc} = this.state.blog
        return (
            <MainLayout>
                <Container>
                    <h1 style={{textAlign: 'center'}}>{title}</h1>
                    <div style={{textAlign: 'center'}}>
                        <img src={thumbnail} className="img-fluid" alt={title}/>
                    </div>
                    <p style={{textAlign: 'center'}}>
                        {desc}
                    </p>
                </Container>
            </MainLayout>
        )
    }
}
