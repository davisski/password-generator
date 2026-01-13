import empty from '../assets/e-rectangle.svg';
import checked from '../assets/c-rectangle.svg';
import hover from '../assets/h-rectangle.svg';
import { useRef, useState } from 'react';
export const CheckboxComponent = ({type}: {type: {text: string}}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="checkbox flex align-center" onMouseEnter={() => {
        if (imgRef.current && !isChecked) {
          imgRef.current.src = hover;
        }
      }} onMouseLeave={() => {
        if (!isChecked && imgRef.current) {
          imgRef.current.src = empty;
        }
      }} onClick={() => {
        setIsChecked(!isChecked);
        if (imgRef.current) {
          imgRef.current.src = imgRef.current.src === empty || imgRef.current.src === hover ? checked : empty;
        }
    }} data-type={type}>
        <img ref={imgRef} src={empty} alt="Checkbox empty" />
        <span>{type.text}</span>
    </div>
  )
}
