import React from "react";

type Props = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  fileNameRef: React.RefObject<string>;
};
const DownloadImageButton: React.FC<Props> = ({ canvasRef, fileNameRef }) => {
  const handleDownload = () => {
    let downloadLink = document.createElement("a");
    downloadLink.href = canvasRef.current!.toDataURL("image/png");
    downloadLink.download = `packing-visualizer_${fileNameRef.current}.png`;
    downloadLink.click();
  };

  return (
    <button onClick={handleDownload} className="bg-gray hover:opacity-50">
      画像ダウンロード
    </button>
  );
};

export default DownloadImageButton;
