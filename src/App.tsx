import { useEffect, useState } from "react";
import SetUp from "./components/SetUp";
import Slot from "./components/Slot";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";

export type SlotPosition = {
  id: string,
  x: number,
  y: number,
};

function App() {
  const [mode, setMode] = useState(0);
  const [slots, setSlots] = useState<SlotPosition[]>([]);
  const [hoveredSlots, setHoveredSlots] = useState<SlotPosition[]>([]);

  useEffect(() => {
    setHoveredSlots([]);
    const slots = [];
    for (let x = 1; x <= mode; x++) {
      for (let y = 1; y <= mode; y++) {
        slots.push({
          id: uuidv4(),
          x: x,
          y: y,
        });
      }
    }
    setSlots(slots);
  }, [mode]);

  function handleHoverSlot(id: string) {
    const slotIsBlue = hoveredSlots.find(item => item.id === id);
    const newSlot = slots.filter(item => item.id === id);

    if (slotIsBlue) {
      const newHoveredSlots = hoveredSlots.filter(item => item.id !== id);
      setHoveredSlots(newHoveredSlots);
    } else {
      setHoveredSlots([...hoveredSlots, newSlot[0]])
    }
  };


  return (
    <div className="w-full h-screen flex justify-center pt-8">
      <div>
        <SetUp onModeSelection={setMode} />
        <div className="grid w-max border border-slate-600" style={{gridTemplateColumns: `repeat(${mode}, minmax(0, 1fr))`}}>
          {slots.map((slot) => (
            <Slot
              key={slot.id}
              id={slot.id}
              x={slot.x}
              y={slot.y}
              onHover={handleHoverSlot}
            />
          ))}
        </div>
      </div>
      <List hoveredSlots={hoveredSlots} />
    </div>
  );
}

export default App;