import React from "react";
import { Mode, modes } from "../types/Mode";

type Props = {
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
};

const ModeSelect: React.FC<Props> = ({ mode, setMode }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMode(event.target.value as Mode);
  };

  return (
    <div>
      <label htmlFor="mode-select" className="block mb-1">
        モード
      </label>
      <select
        id="mode-select"
        value={mode}
        onChange={handleChange}
        className="bg-gray"
      >
        {modes.map((mode) => (
          <option key={mode} value={mode}>
            {mode}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ModeSelect;
