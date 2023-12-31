import { useState } from "react";

export default function ImageInput({image, setImage}) {
    return (
        <div>
            <input type="file" accept=".png,.jpeg,.jpg,.gif" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}></input>
        </div>
    )
  }