import React, { FC } from 'react'

type PropsCard = {
    icon: any;
    title: string;
    valeur: number;
    colorCard: string;
}
const Card: FC<PropsCard> = ({ icon, title, valeur, colorCard }) => {
    return (
        <div className={`text-xl font-bold space-y-2 p-2 flex justify-center flex-col items-center w-full h-48 border border-gray-300 bg-white drop-shadow-xl rounded-xl text-${colorCard}-600`}>
            {icon}
            <h1>{title}</h1>
            <span className='text-5xl font-extrabold'> {valeur}</span>
        </div>
    )
}

export default Card
