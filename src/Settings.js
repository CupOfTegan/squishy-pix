import { useState } from "react";

export default function Settings({filesize, setFilesize}) {
    const [imageArchive] = useState([])
    const [image, setImage] = useState();
    return (
        <div>
            <label>
                File size 
                <input type="text" value={filesize} onChange={(e) => setFilesize(e.target.value)}></input>
            </label>
        </div>
    )
  }