import React from 'react';

class RandomFox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          image: ""
        };
      }
    
      componentDidMount() {
        fetch("https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof/")
          .then(res => res.json())
          .then(
            (result) => {
              this.props.history.push('randomFox/' + (result.image).split('/')[(result.image).split('/').length-1]);
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
                <img src={image}/>
            </div>
          );
        }
      }
}

export default RandomFox;