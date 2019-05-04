import React from 'react';
import Menu from './Menu'

class Home extends React.Component {
    render() {
        return (
            <div className="container text-center">
                <h1 className="display-4">Welcome to the Random Animal Finder!</h1>
                <Menu history={this.props.history}/>
                <img className="img-fluid"src="https://poolhouse.s3.amazonaws.com/blog-assets/dog-cat-and-fox.jpg"/>
            </div>
        )
    }
}

export default Home