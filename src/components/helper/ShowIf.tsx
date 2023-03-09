import React from "react";

type Props = {
  sif: boolean;
  show: React.ReactElement<any>;
};

const ShowIf: React.FC<Props> = ({ sif, show }) => {
  return sif ? show : null;
};

export default ShowIf;
