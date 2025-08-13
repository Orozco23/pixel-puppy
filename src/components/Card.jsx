import { useState } from 'react';

import Options from './Options';
import ChooseClothes from './ChooseClothes';
import ChooseColor from './ChooseColor';
import Outfit from './Outfit';

export default function Card () {
    const [selectedOption, setSelectedOption] = useState(0)

    /*selected clothes*/
    const [selectedHat, setSelectedHat] = useState(0)
    const [selectedShirt, setSelectedShirt] = useState(0)
    const [selectedAccessory, setSelectedAccessory] = useState(0)

    return (
        <div className="card">
            <div className="card-content">
                <p>what should I wear today?</p>
                
                <div className="card-background">
                    <Outfit
                        hat={selectedHat}
                        shirt={selectedShirt}
                        accessory={selectedAccessory}
                    />
                </div>

                <ChooseColor/>

                <Options
                    selected={selectedOption}
                    setSelected={setSelectedOption} 
                />
                
                <ChooseClothes
                    selectedOption={selectedOption}
                    hat={selectedHat}
                    setHat={setSelectedHat}
                    shirt={selectedShirt}
                    setShirt={setSelectedShirt}
                    accessory={selectedAccessory}
                    setAccessory={setSelectedAccessory}
                />
            </div>
        </div>
    )
}
