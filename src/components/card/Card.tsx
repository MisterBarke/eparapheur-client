import React, { FC } from 'react'
import Link from 'next/link'

type PropsCard = {
    icon: any;
    title: string;
    valeur: number;
    colorCard: string;
    linkCard: string;
}
const Card: FC<PropsCard> = ({ icon, title, valeur, colorCard, linkCard }) => {
    return (
        <>
            <Link href={linkCard} className={`text-xl font-bold space-y-2 p-2 flex justify-center flex-col items-center w-full h-48 border border-gray-300 bg-white drop-shadow-xl rounded-xl text-${colorCard}-600`}>
                {icon}
                <h1>{title}</h1>
                <span className='text-5xl font-extrabold'> {valeur}</span>
            </Link>
        </>
    )
}

export default Card
