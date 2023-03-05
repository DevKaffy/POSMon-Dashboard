import React from 'react'
import { headerItems } from '../../data';

const Table = ({}) => {
  return (
    <div className="bg-white w-[60.75rem] px-8">
      <table>
        <thead>
        <tr className="bg-[#EDF1FF] flex gap-4 items-center justify-center">
          {headerItems.map((headerItem, index) => (
            <th
              className="flex items-center justify-center w-[8.95rem] h-[3.37rem]"
              key={`headerItems- ${index}`}
            >
              {headerItem}
            </th>
          ))}
        </tr>
        </thead>
      </table>
    </div>
  );
}

export default Table