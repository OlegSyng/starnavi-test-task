import { MouseEvent, useState } from "react";

type SlotProps = {
  id: string,
  x: number,
  y: number,
  onHover: (id: string) => void,
}; 

function Slot(props: SlotProps) {
  const [mouseEntered, setMouseEnter] = useState<boolean>(false);

  function handleMouseEnter(event: MouseEvent<HTMLDivElement>) {
    setMouseEnter((prevState) => !prevState);
    props.onHover(props.id);
  }
  return (
    <div
      data-id={props.id}
      className={`w-10 h-10 border border-slate-600 ${mouseEntered ? 'bg-blue-500' : ''}`}
      style={{ gridRowStart: props.x, gridColumnStart: props.y }}
      onMouseEnter={handleMouseEnter}
    ></div>
  );
};

export default Slot;
