import React from 'react';
import { useTable } from 'react-table';

const ReactTable = () => {
    const data = [
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
    ];
    const headColumn = [
        { Header: "STT", accessor: "stt" },
        { Header: "MSSV", accessor: "id" },
        { Header: "Họ và tên", accessor: "name" },
        { Header: "Toán", accessor: "math" },
        { Header: "Văn", accessor: "literature" },
        { Header: "Anh", accessor: "english" }
    ];
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ headColumn, data });
    return (
        <div>
            <table {...getTableProps()}>
                            <thead>
                                {headerGroups.map((headerGroup) => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map((column) => (
                                            <th {...column.getHeaderProps()}>
                                                {column.render('Header')}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                                {rows.map((row) => {
                                    prepareRow(row);
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map((cell) => {
                                                return (
                                                    <td {...cell.getCellProps()}>
                                                        {cell.render('Cell')}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
        </div>
    );
};

export default ReactTable;