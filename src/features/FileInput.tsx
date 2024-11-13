import React from "react";

type Props = {
  setData: React.Dispatch<React.SetStateAction<number[][] | null>>;
};

const FileInput: React.FC<Props> = ({ setData }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const content = reader.result as string;

        const rows = content
          .split("\n")
          .map((row) => row.split(" ").map((str) => Number(str)));

        setData(rows);

        console.log(rows);
      };

      reader.onerror = () => {
        alert("ファイルの読み込みに失敗しました");
      };

      reader.readAsText(file);
    }
  };

  return (
    <input
      type="file"
      onChange={handleFileChange}
      className="bg-gray hover:opacity-50"
    />
  );
};

export default FileInput;
