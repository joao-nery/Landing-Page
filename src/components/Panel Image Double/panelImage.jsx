import imageExemple from "../../Images/ImageExemple.png";
import image from './../../Images/img.png';

export function PanelImage() {
  return (
    <div className="flex gap-10 justify-center p-10">
      <img className="h-28 lg:h-72 sm:h-52" src={imageExemple} alt="Image" />
      <img className="h-28 lg:h-72 sm:h-52" src={image} alt="Image" />
    </div>
  );
}
