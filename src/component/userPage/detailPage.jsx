import React, { useMemo } from "react";
import { useTable } from "react-table";

function Table({ data, columns }) {
  const tableInstance = useTable({ data, columns });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default function App() {
  const data = useMemo(
    () => [
      {
        name: "John Doe",
        age: 35,
        email: "john.doe@example.com",
      },
      {
        name: "Jane Smith",
        age: 28,
        email: "jane.smith@example.com",
      },
      {
        name: "Bob Johnson",
        age: 42,
        email: "bob.johnson@example.com",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Email",
        accessor: "email",
      },
    ],
    []
  );

  return <Table data={data} columns={columns} />;
}
.my-table {
  border-collapse: collapse;
  width: 100%;
}

.my-table th,
.my-table td {
  border: 1px solid #ccc;
  padding: 8px;
}

.my-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.my-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

