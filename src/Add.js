import React, { Component } from 'react';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <p className="add1">+ {this.props.gain}</p>
        );
        
    }
}
 
export default Add;