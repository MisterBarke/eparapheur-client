import React from 'react'
import Image from 'next/image';
import img from '../../../asset/images/lettre.jpg'
import Link from 'next/link';
import style from './dash.module.css'
const page: React.FC = () => {
  return (
    <div className='space-y-20'>
      <section className='flex  flex-col-reverse md:flex-row justify-center items-center w-full h-screen'>
        <div className={`flex flex-col justify-center items-center w-full md:w-1/2 space-y-6 py-1 px-4`}>
          <h2 className='md:text-3xl text-xl text-center text-orange-600 font-extrabold'>Bienvenue sur E-PARAHEUR BAGRI-Niger</h2>
          <p className='text-center font-semibold'>Votre outil de gestion de parapheur numérique. Simplifiez la gestion de vos documents et gagnez en efficacité grâce à notre solution intuitive. </p>
          <div>
            {/* <button className='bg-orange-600 w-52 text-white font-semibold p-2 rounded-lg hover:bg-orange-500'>S&apos;incrire</button> */}
            <Link href="/register" className="bg-orange-600 w-52 text-white font-semibold p-2 px-12 rounded-lg hover:bg-orange-500">
            S&apos;incrire
                    </Link>
          </div>
        </div>
        <div className={`w-full md:w-1/2 p-1`}>
          <Image src={img} alt='image' />
        </div>
      </section>

      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-center text-3xl font-bold text-orange-600'>Guide d&apos;inscription</h2>
      </div>

      <section className='md:flex justify-center items-center w-full h-screen'>
        <div className={`w-full md:w-1/2 p-1`}>
          <Image src={img} alt='image' />
        </div>

        <div className='w-full md:w-1/2 py-1 px-6'>
          <ol className='list-decimal pl-5 space-y-5'>
            <li>
              <h2 className='text-md font-bold text-orange-600'>Créer un compte</h2>
              <p>
                Pour commencer, cliquez sur le bouton S&apos;inscrire Vous serez redirigé vers une page d&apos;inscription.
              </p>
            </li>
            <li>
              <h2 className='text-md font-bold text-orange-600'>Remplir le formulaire</h2>
              <p>
                Remplissez les champs nécessaires tels que votre nom, adresse e-mail, mot de passe. Assurez-vous que les informations sont correctes
              </p>
            </li>
            <li>
              <h2 className='text-md font-bold text-orange-600'>Validation de votre e-mail</h2>
              <p>Après avoir soumis vos informations, vous recevrez un e-mail de validation. Cliquez sur le lien fourni pour vérifier votre adresse e-mail.</p>
            </li>
            <li>
              <h2 className='text-md font-bold text-orange-600'>Connexion</h2>
              <p>
                Une fois votre compte activé, revenez sur la page d&apos;accueil et cliquez sur Se connecter. Entrez vos identifiants pour accéder à votre tableau de bord.
              </p>
            </li>
          </ol>
        </div>
      </section>
    </div>

  )
}

export default page;
