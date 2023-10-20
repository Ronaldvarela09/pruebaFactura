import * as React from "react";
import { H3Title, H6TextInfo } from "../../Componets/Invoice/StyledComponent";
import empty_state from "../../assets/empty_state.svg";

export default function ViewLoadInvoice() {
  return (
    <>
      <div className="load">
        <img src={empty_state} alt=""></img>
      </div>
      <div className="load">
        <H3Title>Estamos preparando la información</H3Title>
      </div>
      <div className="load">
        <H6TextInfo>Cuando este lista la encontráras aquí</H6TextInfo>
      </div>
    </>
  );
}
