import React from 'react';

class RandomCat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          image: ""
        };
      }
    
      componentDidMount() {
        fetch("https://aws.random.cat/meow")
          .then(res => res.json())
          .then(
            (result) => {
              this.props.history.push('randomCat/' + (result.file).split('/')[(result.file).split('/').length-1]);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
      render() {
        const { error, isLoaded, image } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <div>
                <img className="img-fluid" src={image}/>
            </div>
          );
        }
      }
}

export default RandomCat;