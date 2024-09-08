'use client'; // Ensure this component is treated as a client component

import React from 'react';

interface TableProps {
    tableSize?: string;
    textStyle?: string;
    columnTitles: string[];
    rowData: { [key: string]: any }[];
    onDelete?: (row: { [key: string]: any }) => void;
}

const Table: React.FC<TableProps> = ({
    tableSize = '',
    textStyle = '',
    columnTitles,
    rowData,
    onDelete,
}) => {
    const getStatusClassName = (Statut: string) => {
        switch (Statut) {
            case 'En cours':
                return 'text-blue-600 font-bold';
            case 'En Attente':
                return 'text-yellow-600 font-bold';
            case 'Traités':
                return 'text-green-600 font-bold';
            default:
                return '';
        }
    };

    const RetireButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
        <button
            onClick={onClick}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full shadow-md transition duration-300 ease-in-out"
        >
            Retiré
        </button>
    );

    return (
        <div className="overflow-x-auto">
            <table className={`table-auto ${tableSize} w-full`}>
                <thead>
                    <tr className="bg-orange-400">
                        {columnTitles.map((title, index) => (
                            <th
                                key={index}
                                className={`${textStyle} text-start p-2 md:py-4 font-bold text-md text-white`}
                            >
                                {title}
                            </th>
                        ))}
                        <th className={`${textStyle} md:py-4 p-2 text-white font-bold`}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rowData.map((row, index) => (
                        <tr key={index} className={`p-2`}>
                            {columnTitles.map((title) => (
                                <td
                                    key={title}
                                    className={`${textStyle} p-2 ${
                                        title === 'Statut'
                                            ? getStatusClassName(row[title])
                                            : ""
                                    } ${
                                        index % 2 === 0 
                                            ? 'bg-gray-100'
                                            : 'bg-gray-50'
                                    }`}
                                >
                                    {row[title]}
                                </td>
                            ))}
                            <td className={`${textStyle} p-2 bg-gray-50`}>
                                <RetireButton onClick={() => onDelete && onDelete(row)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
