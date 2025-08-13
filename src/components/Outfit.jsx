/*puppy*/
import puppy from '../assets/outfit/puppy.png';

/*hats*/
import frogHat from '../assets/outfit/hats/frog-hat.png';
import blueHat from '../assets/outfit/hats/blue-hat.png';
import bowknot from '../assets/outfit/hats/bowknot.png';    

/*shirts*/
import green from '../assets/outfit/shirts/green.png';
import blue from '../assets/outfit/shirts/blue.png';
import purple from '../assets/outfit/shirts/purple.png';

/*accessories*/
import flower from '../assets/outfit/accessories/flower.png';
import sunflower from '../assets/outfit/accessories/sunflower.png';
import gift from '../assets/outfit/accessories/gift.png';

/*all clothes options*/
const hats = [ frogHat, blueHat, bowknot ]
const shirts = [ green, blue, purple ]
const accessories = [ flower, sunflower, gift ]

export default function Outfit ({ hat, shirt, accessory }) {
    return (
        <div className="outfit">
            <img src={puppy} alt="puppy" />
            <img src={hats[hat]} alt="hat" />
            <img src={shirts[shirt]} alt="shirt" />
            <img src={accessories[accessory]} alt="accessory" />
        </div>
    )
}