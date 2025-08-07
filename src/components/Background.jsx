import Cloud from "./Cloud";

export default function Background () {
    return (
        <div className="background">       
            {
                [0,1,2,3,4,5,6,7].map(i => (
                    <Cloud key={i} number={i} />
                ))
            }
        </div>
    )
}