import React, { useState } from "react";


var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

 export default  class  Slider_new extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      images: [
        'https://images.pexels.com/photos/595229/pexels-photo-595229.jpeg'
      ],
      items: [
        'https://images.pexels.com/photos/595229/pexels-photo-595229.jpeg',
        'https://static.pexels.com/photos/325288/pexels-photo-325288.jpeg',
        'https://static.pexels.com/photos/220201/pexels-photo-220201.jpeg'
      ],
      count: 0,
      direction: ''
    };
  }
  
  scrollRight() {
    let newItems = this.state.images.slice();
    newItems.splice(0, 1, this.state.items[this.state.count]);
    this.state.count == this.state.items.length - 1 ? 
      this.setState({images: newItems, count: 0, direction: 'right' }) : 
        this.setState({images: newItems, count: this.state.count + 1, direction: 'right'});
  };
  
  scrollLeft() {
    let newItems = this.state.images.slice();
    newItems.splice(0, 1, this.state.items[this.state.count]);
    this.state.count == 0 ? 
      this.setState({images: newItems, count: this.state.items.length - 1, direction: 'left' }) : 
        this.setState({images: newItems, count: this.state.count -1, direction: 'left'});
  };
  
  render() {
    return(
      <div id='slider'>
        <aside onClick={this.scrollLeft.bind(this)} id='leftArrow' />
        <ReactCSSTransitionGroup transitionName="slide" transitionEnterTimeout={2000} transitionLeaveTimeout={2000}>
          <img key={this.state.images} src={this.state.images} id={this.state.direction} />
        </ReactCSSTransitionGroup>
        <aside onClick={this.scrollRight.bind(this)} id='rightArrow'/>
      </div>
    )
  }
}

