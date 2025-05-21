import React, { JSX } from "react";
import { CompanySearch } from "../../company";
interface Props {
  searchResult: CompanySearch;
  id:string;
}
const Card: React.FC<Props> = ({ searchResult, id }: Props): JSX.Element => {
  return <div>Card</div>;
};

export default Card;
