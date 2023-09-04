import { useState } from "react";

export default function Squisher({unsquishedImage, setSquishedImage}) {
    return (
        <div>
            <p>This is the thing that does the squishing </p>
            <img src={unsquishedImage}/>
        </div>
    )
}