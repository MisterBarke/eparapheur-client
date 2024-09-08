'use client'
import React from 'react'
import Card from '@/components/card/Card'
import { IoFolderOpenOutline } from "react-icons/io5";


  
const page: React.FC = () => {
    return (
        <>
            <div className=' grid md:grid-rows-1 grid-rows-3 grid-flow-col gap-3'>
                <Card linkCard='#' icon={<IoFolderOpenOutline size={50} />} title='Nouveaux' valeur={25} colorCard='blue' />
                <Card linkCard='#' icon={<IoFolderOpenOutline size={50} />} title='En attentes' valeur={25} colorCard='yellow' />
                <Card linkCard='#' icon={<IoFolderOpenOutline size={50} />} title='Traités' valeur={25} colorCard='green' />
            </div>
            <div>
            </div>
        </>
    )
}

export default page