import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t'>
        <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href='/' >
            <Image src='/assets/images/file.png' alt='logo' width={128} height={38} className='h-[40px] w-[70px] rounded-2xl' />
        </Link>
        <p>2024 NILI. All Rights reserved

        </p>
        </div>
      
    </footer>
  )
}

export default Footer
