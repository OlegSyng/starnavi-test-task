import { SlotPosition } from "../App";

type ListProps = {
  hoveredSlots: SlotPosition[];
};

function List({ hoveredSlots }: ListProps) {
  return (
    <div className="ps-5 flex flex-col">
      <h3 className="font-semibold text-4xl">Hover squares</h3>
      <ul className="overflow-auto flex-grow">
        {hoveredSlots.map((item) => (
          <li
            key={item.id}
            className="rounded text-amber-700 bg-amber-200/50 border border-amber-200 px-2 py-4 font-semibold my-2"
          >{`row ${item.x} col ${item.y}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
