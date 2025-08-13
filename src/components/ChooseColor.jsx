import arrow from '../assets/background/arrow.png';

export default function ChooseColor ({ onPrev, onNext }) {
    return (
        <>
            <div className='left-arrow'>
                <img src={arrow} alt="Left Arrow" 
                    onClick={onPrev}
                />
            </div>
            <div className='right-arrow'>
                <img src={arrow} alt="Right Arrow" 
                    onClick={onNext}
                />
            </div>
        </>
    )
}