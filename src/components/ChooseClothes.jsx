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

/*all clothes options*/
const clothesOptions = [
        [ frogHat, blueHat, bowknot ],  //hats
        [ green, blue, purple ],   //shirts
        [ flower, sunflower, gift ]    //accessories
    ]

export default function ChooseClothes ({ selectedOption, hat, setHat, shirt, setShirt, accessory, setAccessory }) {
    /*arrays for getter and setter of selected clothes*/
    const selectedValues = [hat, shirt, accessory]
    const setSelected = [setHat, setShirt, setAccessory]

    /*get current group and selection*/
    /*group of clothes based on selected option*/
    const clothes = clothesOptions[selectedOption]
    const selectedValue = selectedValues[selectedOption]
    const setSelectedValue = setSelected[selectedOption]
    
    return (
        <div className="clothes">
            {clothes.map((img, i) => (
                <button
                    key={i}
                    className={selectedValue === i ? "selected" : ""}
                    onClick={() => setSelectedValue(i)}
                >
                    <img
                        src={img}
                        alt={`Option ${i + 1}`}
                    />
                </button>
            ))}
        </div>
    );
}