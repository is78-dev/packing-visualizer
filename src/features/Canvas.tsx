import React, { useEffect } from "react";
import { Mode } from "../types/Mode";

type Props = {
  data: number[][] | null;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  mode: Mode;
  canvasWidth: number;
  canvasHeight: number;
  canvasScale: number;
};

const Canvas: React.FC<Props> = ({
  data,
  canvasRef,
  mode,
  canvasWidth,
  canvasHeight,
  canvasScale,
}) => {
  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d")!;
    const width = canvas.width;
    const height = canvas.height;

    // 初期化
    context.clearRect(0, 0, width, height);
    context.fillStyle = "#fff";
    context.fillRect(0, 0, width, height);

    if (!data) return;

    const fontSize = 16;
    const canvasMargin = 10;
    context.fillStyle = "#000";
    context.strokeStyle = "#000";
    context.lineWidth = 2;
    context.font = `${fontSize}px Arial`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    const canvasCoord = (x: number, y: number, w: number, h: number) => {
      const cw = w * canvasScale;
      const ch = h * canvasScale;
      const cx = x * canvasScale + canvasMargin;
      const cy = height - y * canvasScale - ch - canvasMargin;
      return {
        x: cx,
        y: cy,
        w: cw,
        h: ch,
      };
    };

    try {
      for (let i = 0; i < data[0][0]; i++) {
        const module = canvasCoord(
          data[i + 1][0],
          data[i + 1][1],
          data[i + 1][2],
          data[i + 1][3]
        );
        if (mode === "pre-placed") {
          if (i < data[0][1]) {
            context.fillStyle = "#ccc";
            context.fillRect(module.x, module.y, module.w, module.h);
            context.fillStyle = "#000";
          }
        }

        context.strokeRect(module.x, module.y, module.w, module.h);
        context.fillText(
          String(i),
          module.x + module.w / 2,
          module.y + module.h / 2
        );
      }
    } catch {
      alert("エラーが発生しました");
    }
  }, [data, mode, canvasHeight, canvasWidth, canvasScale]);

  return (
    <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight}></canvas>
  );
};

export default Canvas;
