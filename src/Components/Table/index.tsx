import React from 'react'
import "./Table.css"
const Table = ({ headings, tableData }: { headings: any; tableData:any}) => {
  return (
    <table className={`table`}>
      <thead>
        <tr>
          {headings.map((heading:any, headingIndex:number) => (
            <th key={headingIndex}>{heading.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row: any, rowIndex: number) => (
          <tr key={`${rowIndex}_table-row-${rowIndex}`}>
            {headings.map((col:any, colIndex:any) => (
              <td key={`col-${colIndex}`}>
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table