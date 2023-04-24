import React, { useState } from 'react'; 
function EditableTable() { 
    const [data, setData] = useState([ 
        { id: 1, name: 'John', email: 'john.doe@example.com' },
         { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }, 
         { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com' },
         ]); 
         const [editing, setEditing] = useState(false); 
         const [editValue, setEditValue] = useState('');
          const handleEdit = (rowIndex, colIndex, value) => { 
            setData((prevState) => { const newData = [...prevState];
                 newData[rowIndex][colIndex] = value; return newData;
                 });
                  setEditing(false); 
                }; 
                return ( 
                <table> 
                    <thead>
                         <tr>
                             <th>ID</th>
                              <th>Name</th>
                               <th>Email</th>
                                </tr> </thead>
                                 <tbody>
                                     {data.map((row, rowIndex) => (
                                         <tr key={row.id}> 
                                         {Object.values(row).map((cell, colIndex) => editing ? (
                                             <td key={colIndex}> 
                                             <input type="text" defaultValue={cell} onChange={(e) => setEditValue(e.target.value)} onBlur={() => handleEdit(rowIndex, colIndex, editValue)} /> 
                                             </td>
                                              ) : (
                                                 <td key={colIndex} onClick={() => setEditing(true)}> {cell} 
                                                 </td>
                                                  ) )}
                                                   </tr>
                                                    ))}
                                                     </tbody> </table> ); } 
export default EditableTable;