import { ChangeEvent, useState, Dispatch, SetStateAction, FormEvent } from "react";
import useSettings from "../hooks/useSettings";

type SetUpProps = {
    onModeSelection: Dispatch<SetStateAction<number>>
}

function SetUp({ onModeSelection }: SetUpProps) {
  const [settings, isLoading] = useSettings();
  const [selection, setSelection] = useState(0);

  const handleSelection = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelection(+event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onModeSelection(selection);
  }

  return (
    <form className="flex mb-6" onSubmit={handleSubmit}>
      <select
        name="select-mode"
        id="select-mode"
        placeholder="Pick mode"
        value={selection}
        onChange={handleSelection}
        className="border border-slate-800 flex-grow mr-4"
      >
        {isLoading ? (
          <option value={0}>Loading...</option>
        ) : (
          <option value={0}>Pick mode</option>
        )}
        {settings &&
          settings.map((item) => (
            <option key={item.id} value={item.field}>
              {item.name}
            </option>
          ))}
      </select>
      <button
        type="submit"
        className="rounded text-white font-medium bg-blue-500 px-3 py-1 hover:bg-blue-800 hover:shadow-md" 
      >START</button>
    </form>
  );
}

export default SetUp;
