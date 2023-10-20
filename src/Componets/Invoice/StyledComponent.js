import styled from "styled-components";

export const H3Title = styled.h3`
  color: #003c71;
`;

export const CardLoadInvoice = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  background-color: #f6f6f6;
  padding: 20px;
`;

export const H4Text = styled.h4`
  color: #00b5e2;
`;

export const H6Text = styled.h6`
  color: #333f48;
`;

export const ButtonLoadInvoice = styled.button`
  background-color: #ffffff;
  color: #333f48;
  border-style: dashed;
  border-color: #00b5e2;
  border-radius: 8px;
  border-width: 1px;
  height: 70px;
  padding: 12px;
  cursor: pointer;
`;

export const ButtonNext = styled.button`
  background-color: ${(prop) =>
    prop.color === "disabled" ? "#828282" : "#00B5E2"};
  border-radius: 8px;
  color: #ffffff;
  height: 40px;
  border-color: #828282;
  width: 150px;
`;

export const H6TextInfo = styled.h5`
  color: #003c71;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  caption-side: bottom;

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  td {
    padding: 5px 10px;
  }

  tbody tr {
    background-color: #efefef;
  }
  thead > tr {
    background-color: #efefef;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;
