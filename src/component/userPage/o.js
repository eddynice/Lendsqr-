

import React, { useState } from 'react';

const Card = () => {
  const [tableData, setTableData] = useState([
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 },
  ]);

  const [editIndex, setEditIndex] = useState(-1);

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleSave = (index) => {
    setEditIndex(-1);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{editIndex === index ? <input type="text" defaultValue={row.name} /> : row.name}</td>
            <td>{editIndex === index ? <input type="text" defaultValue={row.age} /> : row.age}</td>
            <td>
              {editIndex === index ? (
                <>
                  <button onClick={() => handleSave(index)}>Save</button>
                  <button onClick={() => setEditIndex(-1)}>Cancel</button>
                </>
              ) : (
                <button onClick={() => handleEdit(index)}>Edit</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
);
};
export default Card