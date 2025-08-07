import image1 from '../assets/cloud-1.png';
import image2 from '../assets/cloud-2.png';
import image3 from '../assets/cloud-3.png';
import image4 from '../assets/cloud-4.png';
import image5 from '../assets/cloud-5.png';
import image6 from '../assets/cloud-6.png';
import image7 from '../assets/cloud-7.png';

export default function Cloud ({ number }) {

    const images = [image1, image2, image3, image4, image5, image6, image7, image5];
    return (
        <img src={images[number]} alt="Cloud" className={`cloud-${number + 1}`} />
    )
}