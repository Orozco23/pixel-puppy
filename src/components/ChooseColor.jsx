import arrow from '../assets/background/arrow.png';

export default function ChooseColor ({ onPrev, onNext }) {
    return (
        <>
            <button className='left-arrow'>
                <img src={arrow} alt="Left Arrow" 
                    onClick={onPrev}
                />
            </button>
            <button className='right-arrow'>
                <img src={arrow} alt="Right Arrow" 
                    onClick={onNext}
                />
            </button>
        </>
    )
}