import { useState } from 'react';
import hat from '../assets/options/hat.png';
import tShirt from '../assets/options/t-shirt.png';
import flower from '../assets/options/flower.png';

export default function Options () {
    const [selected, setSelected] = useState(null)

    return (
        <div className="options">
            <button
                className={selected === 1 ? "selected" : ""}
                onClick={() => setSelected(1)}
            >
                <img src={hat} alt="Hat" />
            </button>
            <button
                className={selected === 2 ? "selected" : ""}
                onClick={() => setSelected(2)}
            >
                <img src={tShirt} alt="T-Shirt" />
            </button>
            <button
                className={selected === 3 ? "selected" : ""}
                onClick={() => setSelected(3)}
            >
                <img src={flower} alt="Flower" />
            </button>
        </div>
    )
}