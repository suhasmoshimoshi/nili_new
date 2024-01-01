import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import { Separator } from '../ui/separator'
import Navitems from './NavItems'

  
const MobileNav = () => {
  return (
  <nav className='md:hidden'>
    <Sheet>
  <SheetTrigger className='align-middle'>
    <Image alt='menu-icon' src='/assets/icons/menu.svg' width={24} height={24} className='cursor-pointer'/>
  </SheetTrigger>
  <SheetContent className='flex flex-col gap-6 bg-white md:hidden'>
  <Image src='/assets/images/file.png' alt='logo' width={128} height={38} className='h-[50px] w-[100px] rounded-2xl' />

   <Separator className='border border-gray-50' />
   <Navitems />
  </SheetContent>
</Sheet>

  </nav>
  )
}

export default MobileNav
