import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
<>
<section className='bg-primary-50 bg-dotted-patern bg-contain py-5 md:py-10'>
  <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>
<div className='flex flex-col justify-center gap-8 '>
<h1 className="h1-bold">
  Host, Connect, Celebrate: Your Events, Our platform! 
</h1>
<p className="p-regular-20 md:p-regular-24">Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.</p>
<Button asChild className='button w-full sm:w-fit'>
  <Link href='#events'>
Explore Now

  </Link>
</Button>
</div>

<Image alt='banner-image' src="/assets/images/hero.png" width={1000} height={1000} className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]' />
  </div>
</section>


<section id='events' className='wrapper my-8 flex flex-col gap-8 md:gap-12'>
<h2 className='h2-bold'> Trsut by <br /> Thousands of Evnets</h2>4

<div className='flex w-full flex-col gap-5 md:flex-row'>
Search category
</div>
</section>
</>
  )
}