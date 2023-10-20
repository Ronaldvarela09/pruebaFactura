import * as React from "react";
import {
  H4Text,
  ButtonLoadInvoice,
  ButtonNext,
} from "../../Componets/Invoice/StyledComponent";
import document from "../../assets/document.svg";

export default function FormLoadInvoice({
  inputRef,
  handleClick,
  handleFileChange,
  listInvoice,
  hadleLoad,
}) {

  return (
    <>
      <div>
        <H4Text>Cargue de facturas</H4Text>
      </div>
      <div>
        <input
          style={{ display: "none" }}
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
        />

        <ButtonLoadInvoice onClick={handleClick}>
          {" "}
          <img src={document} style={{ verticalAlign: "middle" }} alt=""></img>
          <strong>
            {" "}
            Subir o arrastrar el archivo aquí &nbsp;&nbsp;&nbsp;&nbsp; EXCEL,
            CSV
          </strong>
        </ButtonLoadInvoice>
      </div>
      <div>
        <h5>
          El documento debe ser formato csv o excel y un tamaño maximo de 1MB.
        </h5>
      </div>
      <div className="aling-button">
        <ButtonNext
          onClick={hadleLoad}
          disabled={!listInvoice.length > 0}
          color={listInvoice.length > 0 ? "" : "disabled"}
        >
          Continuar
        </ButtonNext>
      </div>
    </>
  );
}
