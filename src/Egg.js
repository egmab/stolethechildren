import React, { Component } from 'react';
import './Egg.css';
import Add from './Add';


let egg;
class Egg extends Component {
    constructor(props) {
        super(props);
        this.rarityTab = ['junk', 'basic', 'fine', 'ascended', 'exotic', 'rare', 'masterwork', 'legendary']
        egg = this.rarityTab[Math.floor(Math.random()*this.rarityTab.length)];
        this.state = {
            egg,
        }
    }

    componentDidMount() {
        setInterval(() => {
            egg = this.rarityTab[Math.floor(Math.random()*this.rarityTab.length)];
                this.setState({ egg, });
        }, 6009);

    }


    render() {
        const { id, score, sens } = this.props;
        const { egg } = this.state;
        let eggscore;
        let image;
        switch (egg) {
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
                <img src={image} alt={egg} className={egg} />
                <Add sens={sens} gain={eggscore}/>
            </div>
        );
    }
}

export default Egg;