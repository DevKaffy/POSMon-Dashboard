import React from 'react'

const Table = ({time, amount, type, terminal, account, status,}: {
  time: string;
  amount: string;
  type: string;
  terminal: string;
  account: string;
  status: string;
}) => {
  return (
      <tr className="flex items-center gap-x-[6rem] gap-y-[6rem] text-center">
        <td>{time}</td>
        <td>{amount}</td>
        <td>{type}</td>
        <td>{terminal}</td>
        <td>{account}</td>
        <td>{status}</td>
      </tr>
  );
}

export default Table