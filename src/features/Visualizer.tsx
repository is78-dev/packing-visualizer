import React, { useRef, useState } from "react";
import FileInput from "./FileInput";
import Slider from "../components/Slider";
import DownloadImageButton from "./DownloadImageButton";
import Canvas from "./Canvas";
import { Mode } from "../types/Mode";
import ModeSelect from "./ModeSelect";

const Visualizer: React.FC = () => {
  const [data, setData] = useState<number[][] | null>(null);
  const [mode, setMode] = useState<Mode>("default");
  const [canvasWidth, setCanvasWidth] = useState<number>(500);
  const [canvasHeight, setCanvasHeight] = useState<number>(500);
  const [canvasScale, setCanvasScale] = useState<number>(10);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  return (
    <div className="flex flex-1">
      <div className="flex flex-col gap-4 p-4 border-r min-h-full">
        <FileInput setData={setData} />
        <DownloadImageButton canvasRef={canvasRef} />
        <ModeSelect mode={mode} setMode={setMode} />
        <Slider
          name={"Width"}
          value={canvasWidth}
          setValue={setCanvasWidth}
          min={10}
          max={1000}
        />
        <Slider
          name={"Height"}
          value={canvasHeight}
          setValue={setCanvasHeight}
          min={10}
          max={1000}
        />
        <Slider
          name={"Scale"}
          value={canvasScale}
          setValue={setCanvasScale}
          min={1}
          max={100}
        />
      </div>
      <div className="p-4 overflow-auto">
        <Canvas
          data={data}
          canvasRef={canvasRef}
          mode={mode}
          canvasWidth={canvasWidth}
          canvasHeight={canvasHeight}
          canvasScale={canvasScale}
        />
      </div>
    </div>
  );
};

export default Visualizer;
