import React, { useState, useRef } from "react";
import {
  H3Title,
  CardLoadInvoice,
} from "../../../Componets/Invoice/StyledComponent";
import * as XLSX from "xlsx";
import FormLoadInvoice from "../../../Componets/Invoice/FormLoadInvoice";
import ViewLoadInvoice from "../../../Componets/Invoice/ViewLoadInvoice";
import TableInvoice from "../../../Componets/Invoice/TableInvoice";
import "./loadInVoice.css";

const LoadInvoice = () => {
  const inputRef = useRef(null);
  const [listInvoice, setListInvoice] = useState([]);
  const [loadData, setLoadData] = useState(false);
  const [hiddenForm, setHiddenForm] = useState(false);
  const [hiddenTable, setHiddenTable] = useState(true);
  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    var hojas = [];
    if (fileObj) {
      var fileReader = new FileReader();
      fileReader.readAsArrayBuffer(fileObj);

      fileReader.onloadend = function (event) {
        var data = new Uint8Array(event.target.result);
        var workbook = XLSX.read(data, { type: "array" });

        workbook.SheetNames.forEach(function (sheetNames) {
          var XlRowObj = XLSX.utils.sheet_to_row_object_array(
            workbook.Sheets[sheetNames]
          );
          hojas.push({
            data: XlRowObj,
            sheetNames,
          });
        });
        setListInvoice(hojas);
      };
    }
  };

  const hadleLoad = () => {
    setLoadData(true);
    setHiddenForm(true);
    setTimeout(() => {
      setLoadData(false);
      setHiddenTable(false);
    }, 5000);
  };

  return (
    <>
      <div className="container">
        <div>
          <H3Title>Cargue de facturas en dos pasos</H3Title>
        </div>
        <div>
          <H3Title>Carga la informacion de las facturas de tu empresa</H3Title>
        </div>
        <div>
          <CardLoadInvoice>
            <div>
              <h5>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum es simplemente el texto de
                relleno de las imprentas y archivos .
              </h5>
            </div>

            {hiddenForm ? (
              ""
            ) : (
              <FormLoadInvoice
                inputRef={inputRef}
                handleClick={handleClick}
                handleFileChange={handleFileChange}
                listInvoice={listInvoice}
                hadleLoad={hadleLoad}
              />
            )}

            {loadData && listInvoice.length > 0 ? <ViewLoadInvoice /> : ""}

            {hiddenTable ? "" : <TableInvoice listInvoice={listInvoice} />}
          </CardLoadInvoice>
        </div>
      </div>
    </>
  );
};
export default LoadInvoice;
