import React from 'react'
import Card from '@/components/card/Card'
import { IoFolderOpenOutline } from "react-icons/io5";
const page: React.FC = () => {
  return (
    <div>
        <Card icon={<IoFolderOpenOutline size={50}/>} title='Nouveaux' valeur={25} colorCard='blue' />
        <Card icon={<IoFolderOpenOutline size={50}/>} title='Nouveaux' valeur={25} colorCard='blue' />
        <Card icon={<IoFolderOpenOutline size={50}/>} title='Nouveaux' valeur={25} colorCard='blue' />
        <Card icon={<IoFolderOpenOutline size={50}/>} title='Nouveaux' valeur={25} colorCard='blue' />
        <Card icon={<IoFolderOpenOutline size={50}/>} title='Nouveaux' valeur={25} colorCard='blue' />
        <Card icon={<IoFolderOpenOutline size={50}/>} title='Nouveaux' valeur={25} colorCard='blue' />
    </div>
  )
}

export default page