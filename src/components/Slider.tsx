import React from "react";

type Props = {
  name: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  min?: number;
  max?: number;
};

const Slider: React.FC<Props> = ({ name, value, setValue, ...props }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div>
      <label htmlFor={`slider-${name}`}>{`${name}: ${value}`}</label>
      <input
        type="range"
        onChange={handleChange}
        id={`slider-${name}`}
        min={props.min}
        max={props.max}
        value={value}
        className="block max-w-full"
      />
    </div>
  );
};

export default Slider;
