'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { useRef } from 'react'


const spanMap = {
  1: { col: 'col-span-1', row: 'row-span-1' },
  2: { col: 'col-span-2', row: 'row-span-2' },
  3: { col: 'col-span-3', row: 'row-span-3' },
  4: { col: 'col-span-4', row: 'row-span-4' },
}


const TechCard = ({ weight = 1, image, title}) => {


  const cardRef = useRef(null)
  const animationRef = useRef(null)

  useGSAP(() => {
    const anim = gsap.fromTo('.card-pill',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', paused: true }
    )
    animationRef.current = anim

    const el = cardRef.current
    const play = () => anim.play()
    const reverse = () => anim.reverse()

    el.addEventListener('mouseenter', play)
    el.addEventListener('mouseleave', reverse)

    return () => {
      el.removeEventListener('mouseenter', play)
      el.removeEventListener('mouseleave', reverse)
    }
  }, { scope: cardRef })


  return (
    <li
      className={`${spanMap[weight].col} ${spanMap[weight].row} aspect-square
    border
    border-white
    flex flex-col items-center justify-center
    relative
    overflow-hidden
    `}

      ref={cardRef}
    >
      <Image height={1000} width={1000} alt='tech-icon' src={image}
        className='w-[62%] object-cover'
      />

      <div className='absolute bottom-3 bg-primary py-1 px-3 rounded-full card-pill opacity-0'>
        <p className='para text-white'>{title}</p>
      </div>
    </li>
  )
}

export default TechCard