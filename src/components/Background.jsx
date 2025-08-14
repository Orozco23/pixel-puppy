import { useState } from "react";
import Card from "./Card";
import Cloud from "./Cloud";

const colors = ["#80C9CA", "#F3AACB", "#D0A3CF"]

export default function Background () {
    /*background color*/
    const [colorIndex, setColorIndex] = useState(0)
    const handlePrevColor = () => {
        setColorIndex((prevColor) => (prevColor === 0 ? colors.length - 1 : prevColor - 1))
    }
    const handleNextColor = () => {
        setColorIndex((prevColor) => (prevColor === colors.length - 1 ? 0 : prevColor + 1))
    }

    return (
        <>
            <div className="background"
                style={{ backgroundColor: colors[colorIndex] }}
            >      
                {
                    [0,1,2,3,4,5,6,7].map(i => (
                        <Cloud key={i} number={i} />
                    ))
                }
            </div>
            <Card 
                handlePrevColor={handlePrevColor}
                handleNextColor={handleNextColor}
                color={colors[colorIndex]}
            />
        </>
    )
}