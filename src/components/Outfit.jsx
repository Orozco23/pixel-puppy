/*puppy*/
import puppy from '../assets/outfit/puppy.png';

/*hats*/
import blueHat from '../assets/outfit/hats/blue-hat.png';
import frogHat from '../assets/outfit/hats/frog-hat.png';
import bowknot from '../assets/outfit/hats/bowknot.png';    

/*shirts*/
import blue from '../assets/outfit/shirts/blue.png';
import green from '../assets/outfit/shirts/green.png';
import purple from '../assets/outfit/shirts/purple.png';

/*accessories*/
import sunflower from '../assets/outfit/accessories/sunflower.png';
import flower from '../assets/outfit/accessories/flower.png';
import gift from '../assets/outfit/accessories/gift.png';

export default function Outfit () {
    return (
        <div className="outfit">
            <img src={puppy} alt="Puppy" />
            <img src={blueHat} alt="hat" />
            <img src={blue} alt="shirt" />
            <img src={sunflower} alt="accessory" />
        </div>
    )
}