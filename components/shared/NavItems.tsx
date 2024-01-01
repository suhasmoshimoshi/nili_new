'use client'

import React from 'react'
import {headerLinks} from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navitems = () => {
  const PathName = usePathname()
  return (
    <ul className='md:flex-between flex w-full  flex-col items-start gap-5 md:flex-row'>
      {headerLinks.map((link)=>{

      const  isActive = PathName === link.route
        return (
          <li className={`${isActive && 'text-green-500'} flex-center p-medium-16 whitespace-nowrap`}>
            <Link href={link.route}>
            {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Navitems
