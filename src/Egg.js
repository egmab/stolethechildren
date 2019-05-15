import React, { Component } from 'react';
import axios from 'axios';
import './Egg.css';
import Add from './Add';



class Egg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            egg: "",
        }
    }
    componentWillMount() {
        axios.get(`https://easteregg.wildcodeschool.fr/api/eggs/random`)
            .then(res => {
                const egg = res.data;
                this.setState({ egg, });
            })
    }
    componentDidMount() {
        setInterval(() => {
            axios.get(`https://easteregg.wildcodeschool.fr/api/eggs/random`)
                .then(res => {
                    const egg = res.data;
                    this.setState({ egg, });
                })
        }, 6009);

    }


    render() {
        const { id, score, sens } = this.props;
        const { egg } = this.state;
        let eggscore;
        let image;
        switch (egg.rarity) {
            case 'junk':
                eggscore = 1;
                image = "./junk.png";
                break;
            case 'basic':
                eggscore = 2;
                image = "./basic.png";
                break;
            case 'fine':
                eggscore = 3;
                image = "./fine.png";
                break;
            case 'ascended':
                eggscore = 4;
                image = "./ascended.png";
                break;
            case 'exotic':
                eggscore = 5;
                image = "./exotic.png";
                break;
            case 'rare':
                eggscore = 6;
                image = "./rare.png";
                break;
            case 'masterwork':
                eggscore = 7;
                image = "./masterwork.png";
                break;
            case 'legendary':
                eggscore = 8;
                image = "./legendary.png";
                break;
            default:
                break;
        }
        let eggClass;
        if (sens === "left"){
            eggClass = "eggImagel"
        }else{
            eggClass = "eggImager"
        }

        return (
            <div className={eggClass} onMouseDown={() => score(eggscore, id)} >
                <img src={image} alt={egg.name} className={egg.rarity} />
                <Add sens={sens} gain={eggscore}/>
            </div>
        );
    }
}

export default Egg;