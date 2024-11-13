import React from "react";

type Props = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
};
const DownloadImageButton: React.FC<Props> = ({ canvasRef }) => {
  const getCurrentTimestamp = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // 月は0始まりなので+1
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
  };

  const handleDownload = () => {
    let downloadLink = document.createElement("a");
    downloadLink.href = canvasRef.current!.toDataURL("image/png");
    downloadLink.download = `packing-visualizer_${getCurrentTimestamp()}.png`;
    downloadLink.click();
  };

  return (
    <button onClick={handleDownload} className="bg-gray hover:opacity-50">
      画像ダウンロード
    </button>
  );
};

export default DownloadImageButton;
