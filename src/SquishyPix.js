import { useState } from "react";
import ImageInput from "./ImageInput";
import Squisher from "./Squisher";
import SquishedImage from "./SquishedImage";
import Settings from "./Settings";

export default function SquishyPix() {
  const [filesize, setFilesize] = useState(1);
  const [artifacts, setArtifacts] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const [squishedImage, setSquishedImage] = useState();
  const [unsquishedImage, setUnsquishedImage] = useState();
  
  return (
    <>
      <Settings filesize={filesize} setFilesize={setFilesize} />
      <Squisher filesize={filesize} unsquishedImage={unsquishedImage} setSquishedImage={setSquishedImage} />
      <ImageInput image={unsquishedImage} setImage={setUnsquishedImage} />
      <SquishedImage squishedImage={squishedImage}/>
    </>
  );
}
