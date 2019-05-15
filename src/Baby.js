import React, { Component } from 'react';
import Egg from './Egg';


class baby extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { idegg, img, score, sens } = this.props;
        return (
            <React.Fragment>
                <img src={img} alt="baby" />
                <Egg sens={sens} id={idegg} score={score} />
            </React.Fragment>

        );
    }
}

export default baby;



