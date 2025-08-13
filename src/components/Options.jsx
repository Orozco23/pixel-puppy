import hat from '../assets/options/hat.png';
import tShirt from '../assets/options/t-shirt.png';
import flower from '../assets/options/flower.png';

export default function Options ({ selected, setSelected }) {

    const options = [
        { img: hat, alt: "Hat" },
        { img: tShirt, alt: "T-Shirt" },
        { img: flower, alt: "Flower" }
    ]

    return (
        <div className="options">
            {options.map((option, i) => (
                <button
                    key={i}
                    className={selected === i ? "selected" : ""}
                    onClick={() => setSelected(i)}
                >
                    <img src={option.img} alt={option.alt} />
                </button>
            ))}
        </div>
    )
}