// import React from 'react'
// import {headerItems, tableItems} from "../../data"
// const TableItems = () => {
//   return (
//     <div className="bg-white w-[60.75rem] px-8">
//       <table>
//         <thead>
//           <tr className="bg-[#EDF1FF] flex gap-4 items-center justify-center">
//             {headerItems.map((headerItem, index) => (
//               <th
//                 className="flex items-center justify-center w-[8.95rem] h-[3.37rem]"
//                 key={`headerItems- ${index}`}
//               >
//                 {headerItem}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {tableItems.map((tableItem, index) => (
//             <Table
//               key={`tableItems - ${index}`}
//               time={tableItem.time}
//               amount={tableItem.amount}
//               type={tableItem.type}
//               terminal={tableItem.terminal}
//               account={tableItem.account}
//               status={tableItem.status}
//             />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default TableItems