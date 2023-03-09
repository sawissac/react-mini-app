import React from "react";

type ClickEventFunction = (ev: React.MouseEvent<HTMLButtonElement>) => void;

type Props = {
  className: string;
  label: string;
  onClick: ClickEventFunction;
};

const ClickableList: React.FC<Props> = ({ className, onClick, label }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      <p>{label}</p>
    </button>
  );
};

export default ClickableList;
