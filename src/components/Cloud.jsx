import image1 from '../assets/background/cloud-1.png';
import image2 from '../assets/background/cloud-2.png';
import image3 from '../assets/background/cloud-3.png';
import image4 from '../assets/background/cloud-4.png';
import image5 from '../assets/background/cloud-5.png';
import image6 from '../assets/background/cloud-6.png';
import image7 from '../assets/background/cloud-7.png';

const images = [image1, image2, image3, image4, image5, image6, image7, image5];

export default function Cloud ({ number }) {
    return (
        <img src={images[number]} alt="Cloud" className={`cloud-${number + 1}`} />
    )
}