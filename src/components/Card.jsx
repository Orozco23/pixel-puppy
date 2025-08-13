import Options from './Options';
import ChooseClothes from './ChooseClothes';
import ChooseColor from './ChooseColor';
import Outfit from './Outfit';

export default function Card () {
    return (
        <div className="card">
            <div className="card-content">
                <p>what should I wear today?</p>
                
                <div className="card-background">
                    <Outfit/>
                </div>

                <ChooseColor/>

                <Options/>
                
                <ChooseClothes/>
            </div>
        </div>
    )
}
