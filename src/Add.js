import React, { Component } from 'react';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="add1">+ {this.props.gain}</div>
        );
        
    }
}
 
export default Add;