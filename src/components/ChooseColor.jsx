import arrow from '../assets/background/arrow.png';

export default function ChooseColor() {
    return (
        <>
            <div className='left-arrow'>
                <img src={arrow} alt="Left Arrow" />
            </div>
            <div className='right-arrow'>
                <img src={arrow} alt="Right Arrow" />
            </div>
        </>
    )
}