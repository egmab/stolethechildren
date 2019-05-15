import React, { Component } from 'react';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { gain, sens } = this.props;
        let addClass;
        if (sens === "left"){
            addClass="add1"
        }else{
            addClass="add2"
        }
        return (  
            <div className={addClass}>+ {gain}</div>
        );
        
    }
}
 
export default Add;