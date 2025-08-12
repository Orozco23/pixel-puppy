import { useState } from 'react';

/*hats*/
import frogHat from '../assets/clothes/hats/frog-hat.png';
import blueHat from '../assets/clothes/hats/blue-hat.png';
import bowknot from '../assets/clothes/hats/bowknot.png';

/*shirts*/
import green from '../assets/clothes/shirts/green.png';
import blue from '../assets/clothes/shirts/blue.png';
import purple from '../assets/clothes/shirts/purple.png';

/*accessories*/
import flower from '../assets/clothes/accessories/flower.png';
import sunflower from '../assets/clothes/accessories/sunflower.png';
import gift from '../assets/clothes/accessories/gift.png';

export default function ChooseClothes() {
    const [selected, setSelected] = useState(2);
    return (
        <div className="clothes">
            <button
                className={selected === 1 ? "selected" : ""}
                onClick={() => setSelected(1)}
            >
                <img src={frogHat} alt="Frog Hat" />
            </button>
            <button
                className={selected === 2 ? "selected" : ""}
                onClick={() => setSelected(2)}
            >
                <img src={blueHat} alt="Blue Hat" />
            </button>
            <button
                className={selected === 3 ? "selected" : ""}
                onClick={() => setSelected(3)}
            >
                <img src={bowknot} alt="Bowknot" />
            </button>
        </div>
    );
}