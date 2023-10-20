import * as React from "react";
import { StyledTable } from "../../Componets/Invoice/StyledComponent";

export default function TableInvoice({ listInvoice }) {
  return (
    <>
      <div className="table">
        <StyledTable>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombres y apellidos</th>
              <th>Dirección</th>
              <th>Valor a pagar</th>
              <th>Fecha de vencimiento</th>
              <th>Fecha de pago</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {listInvoice.length > 0 &&
              listInvoice[0].data.map((invoice) => {
                return (
                  <tr>
                    <td>{invoice.codigoFactura}</td>
                    <td>{invoice.nombreApellidos}</td>
                    <td>{invoice.direccion}</td>
                    <td>{invoice.valorPagar}</td>
                    <td>{invoice.fechaVencimiento}</td>
                    <td>{invoice.fechaOportunaPago}</td>
                    <td>{invoice.estado}</td>
                  </tr>
                );
              })}
          </tbody>
        </StyledTable>
      </div>
    </>
  );
}
