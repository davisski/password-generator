import { useState, useRef } from 'react';
export const RangeComponent = () => {

  const [isDragging, setIsDragging] = useState(false);
  const thumbRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [thumbWidth, setThumbWidth] = useState<number | undefined>();

  const [startX, setStartX] = useState(0);

  const mouseDownHandler = () => {
    const thumbRect = thumbRef.current?.getBoundingClientRect();

    setIsDragging(true);

    if (thumbRef.current && thumbRect) {
      setStartX(thumbRect.x + thumbRect.width / 2);
      setThumbWidth(thumbRect.width);
    }
  }

  const mouseUpHandler = () => {
    setIsDragging(false);
  }

  const mouseMoveHandler = (e: React.MouseEvent) => {
    if(isDragging){
      const {left, right, x} = trackRef.current ? trackRef.current.getBoundingClientRect() : {left: 0, right: 0, x: 0};
      const isLeftOver = trackRef.current ? (e.clientX <= left) : 0;
      const isRightOver = trackRef.current ? (e.clientX >= right) : 0;

      if(e.clientX < startX && !isLeftOver){
        if(thumbRef.current && trackRef.current && progressRef.current){
          thumbRef.current.style.left = `${e.clientX - x - (thumbWidth ? thumbWidth / 2 : 0)}px`;
          progressRef.current.style.width = `${e.clientX - x}px`;
        }
      }

      if(e.clientX > startX && !isRightOver){
        if(thumbRef.current && trackRef.current && progressRef.current){
          thumbRef.current.style.left = `${e.clientX - x - (thumbWidth ? thumbWidth / 2 : 0)}px`;
          progressRef.current.style.width = `${e.clientX - x}px`;
        }
      }
    }
  }


  return (
    <div className="range" onMouseLeave={() => setIsDragging(false)} onMouseDown={mouseDownHandler} onMouseMove={mouseMoveHandler} onMouseUp={mouseUpHandler}>
        <div className="range-track" ref={trackRef}></div>
        <div className={`range-thumb ${isDragging ? 'active' : ''}`} ref={thumbRef}></div>
        <div className="range-progress" ref={progressRef}></div>
    </div>
  )
}
