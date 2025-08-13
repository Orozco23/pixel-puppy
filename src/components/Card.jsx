import { useState } from 'react';

import Options from './Options';
import ChooseClothes from './ChooseClothes';
import ChooseColor from './ChooseColor';
import Outfit from './Outfit';

export default function Card ({ handlePrevColor, handleNextColor, color }) {
    const [selectedOption, setSelectedOption] = useState(0)

    /*selected clothes*/
    const [selectedHat, setSelectedHat] = useState(0)
    const [selectedShirt, setSelectedShirt] = useState(0)
    const [selectedAccessory, setSelectedAccessory] = useState(0)

    return (
        <div className="card">
            <div className="card-content">
                <p>what should I wear today?</p>
                
                <div className="card-background"
                    style={{ backgroundColor: color }}
                >
                    <Outfit
                        hat={selectedHat}
                        shirt={selectedShirt}
                        accessory={selectedAccessory}
                    />
                </div>

                <ChooseColor
                    onPrev={handlePrevColor}
                    onNext={handleNextColor}
                />

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
