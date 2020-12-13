import React, { useState, useEffect } from 'react';

const PRIMARY_COLOR = 'blue';

function SortingVisualizer() {
    const [length, setLength] = useState(150)
    const [array, setArray] = useState([])

    useEffect(() => {
        populate_array()
    }, [])

    useEffect(() => {
        populate_array()
    }, [length])


    const populate_array = (() => {
        const array = []
        for (let i = 0; i < length; i++) {
            array.push(random_number())
        }
        setArray(array)
    })

    const random_number = (() => {
        return Math.floor(Math.random() * (800 - 1) + 1);
    })

    return (
        <div>
            {console.log(array)}
            <button onClick={populate_array}>repopulate</button>
            <input
                type="range"
                min="1"
                max="630"
                id="length"
                onChange={() => setLength(document.getElementById("length").value)}
            />
            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                        key={idx}
                        className="array-bar"
                        style={{
                            backgroundColor: PRIMARY_COLOR,
                            height: `${value}px`,
                            width: `${document.body.clientWidth / length}px`
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default SortingVisualizer;