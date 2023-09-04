import { useState } from "react";
import ImageInput from "./ImageInput";
import Squisher from "./Squisher";
import SquishedImage from "./SquishedImage";
import Settings from "./Settings";

export default function SquishyPix() {
  const [filesize, setFilesize] = useState(1);
  const [artifacts, setArtifacts] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  
  const [image, setImage] = useState();
  
  return (
    <>
      <Settings filesize={filesize} setFilesize={setFilesize} />
      <Squisher filesize={filesize} image={image} />
      <ImageInput image={image} setImage={setImage} />
      <SquishedImage />
    </>
  );
}
