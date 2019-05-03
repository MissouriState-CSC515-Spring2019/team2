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
        this.setState({height: window.innerHeight * (0.7) + 'px'});
        this.setState({width: window.innerWidth * (0.7) + 'px'});
        fetch("https://aws.random.cat/meow")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                image: result.file
              });
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
                <img className="img-fluid" src={image} transformation width={this.state.width} height={this.state.height} gravity="faces" crop="fill" />
            </div>
          );
        }
      }
}

export default RandomCat;