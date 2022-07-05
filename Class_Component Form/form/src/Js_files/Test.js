import React, { Component } from 'react'

class Test extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div> {this.props.name} </div>
    )
  }
}

export default Test;