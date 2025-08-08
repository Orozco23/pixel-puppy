import { useState } from 'react';

/*hats*/
import frogHat from '../assets/clothes/hats/frog-hat.png';
import blueHat from '../assets/clothes/hats/blue-hat.png';
import bowknot from '../assets/clothes/hats/bowknot.png';

export default function ChooseClothes() {
    const [selected, setSelected] = useState(null);
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