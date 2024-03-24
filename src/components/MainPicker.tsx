// Dependencies
import Font from "react-font";

import { colord } from "colord";
import { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";

// Main Component
export default function () {
    // States
    const [selectedColor, setSelectedColor] = useState("#aabbcc");
    const [textColor, setTextColor] = useState("#ffffff")

    // Too Dark Check
    useEffect(() => {
        const isDark = colord(selectedColor).isDark()

        if (isDark) {
            setTextColor("#ffffff")
        } else {
            setTextColor("#000000")
        }
    })

    // Return Component
    return (
        <div style={{
            backgroundColor: selectedColor
        }} className="flex flex-col justify-center items-center h-[100vh]">

            <Font family="Inter">
                <h1
                    style={{
                        color: textColor
                    }}
                    className="pb-14 text-4xl text-center font-black">COLOR PICKER</h1>
            </Font>

            <div>
                <HexColorPicker color={selectedColor} onChange={setSelectedColor} />
                <Font family="Inter">
                    <p
                        style={{
                            color: textColor
                        }}
                        className="text-center pt-4">{selectedColor}</p>
                </Font>
            </div>
        </div>
    )
}