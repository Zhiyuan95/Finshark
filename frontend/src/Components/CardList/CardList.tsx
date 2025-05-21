import React, { JSX } from "react";
import Card from "../Card/Card";

interface Props {}

const CardList: React.FC<Props> = (props: Props):JSX.Element => {
  return (
    <div>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardList;
