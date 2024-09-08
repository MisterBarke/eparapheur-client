'use client'; // Ensure this component is treated as a client component

import React from 'react';
import Table from '@/components/table/Table';

function Page() {
    const columnTitles = [
        'Titre',
        'Action',
        'Identifiant',
        'Date de candidature',
        'Statut',
        'Date de Statut',
        'Etape suivant',
        'Lieu',
        'Stage/temps plein'
    ];

    const rowData = [
        {
            Titre: 'Développeur',
            Action: 'Voir',
            Identifiant: '12345',
            'Date de candidature': '2024-08-01',
            Statut: 'En cours',
            'Date de Statut': '2024-08-20',
            'Etape suivant': 'Entretien',
            Lieu: 'Paris',
            'Stage/temps plein': 'Temps plein'
        },
        // Add more rows as needed
    ];

    const handleDelete = (row: { [key: string]: any }) => {
        console.log('Delete:', row);
    };

    return (
        <div>
            <Table
                columnTitles={columnTitles}
                rowData={rowData}
                onDelete={handleDelete}
                tableSize="w-full"
                textStyle="text-sm"
            />
        </div>
    );
}

export default Page;
