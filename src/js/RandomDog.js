import React from 'react';

class RandomDog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          image: ""
        };
      }
    
      componentDidMount() {
		if(window.location.hash.substr(1).length === 0){
        fetch("https://random.dog/woof.json")
          .then(res => res.json())
          .then(
            (result) => {
              this.props.history.push('randomDog#' + (result.url).split('/')[(result.url).split('/').length-1]);
			  this.setState({
				  isLoaded: true,
				  image: result.url
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
		else{
			this.setState({
				isLoaded: true,
				image:'https://random.dog/' + window.location.hash.substr(1)
			});
		}
      }
    
      render() {
        const { error, isLoaded, image } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else if (isLoaded && image.substring(image.lastIndexOf('.') + 1) === 'mp4') {
          return (
            <div>
              <video controls>
                <source className="img-fluid" src={image} type="video/mp4"/>
              </video>
            </div>
          )

        } else if (isLoaded && window.location.hash.substr(1).substring(image.lastIndexOf('.') + 1) === 'webm') {
          return (
            <div>
              <video controls>
                <source className="img-fluid" src={image} type="video/webm"/>
              </video>
            </div>
          )
          }
        else {
          return (
            <div>
                <img className="img-fluid" src={image}/>
            </div>
          );
        }
      }
}



export default RandomDog;