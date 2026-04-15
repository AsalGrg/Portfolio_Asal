'use client'

import Image from 'next/image'
import React, {useRef} from 'react'
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/SplitText";
import gsap from "gsap";

const AboutMe = () => {

  const containerRef = useRef(null);

  useGSAP(() => {

    SplitText.create('.about-heading', {
      type: 'chars,lines',
      autoSplit: true,
      onSplit: (self)=>gsap.fromTo(self.lines,
          {
            filter: 'blur(8px)',
            opacity:0
          },
          {
            scrollTrigger:{
              trigger: containerRef.current,
              start:'top 50%',
              scrub: 0.5,
              end: 'bottom bottom',
              markers:true,
            },
            filter: 'blur(0px)',
            ease: 'power1.out',
            stagger:0.4,
            opacity: 1
          })
    })
  }, { scope: containerRef })

  return (
    <section className='bg-radial-[at_130%_-20%] to-50% to-black from from-primary
    h-fit
    '
    ref={containerRef}
    >
      <div className='section-content min-h-[800px]'>
        <div className='h-full relative space-y-12 lg:space-y-0'>
          <h2 className='heading text-white z-30 about-heading'
          >
            Your website is your identity. It is a trust and a <span className='block lg:hidden about-heading'>portal to reach to your audience, as a creative web developer, I help brands leave a mark that matters.</span>
          </h2>
          <div className='flex justify-between'>
            <div className=' top-0 inset-0 w-[800px] hidden lg:block'>
              <Image src={'/Asal.png'} height={1000} width={1000} alt="brand-identity" className='w-[min(600px,100vw)] h-[min(600px,100vw)] object-cover absolute saturate-100 object-[50%_32%]' 
              loading='eager'
              />
            </div>
            <div className='z-10 w-full h-full space-y-20'>
              <h2 className='heading text-white !text-start hidden lg:block about-heading'>portal to reach to your audience, as a creative web developer, I help brands leave a mark that matters.</h2>
              <div className='para'>
                <p className='lg:w-[400px] w-full mx-auto text-white! text-center lg:text-start
                opacity-70
                '>My name is Asal Gurung. I have been working as a web developer for quiet few years. Started my journey as a backend engineer, I quickly got drawn to the fun, creative frontend side of the website. Now, I focus on creating websites that engage audience, help grow brands to its full potential. </p>
              </div>
            </div>
          </div>

          <div className='inset-0 block lg:hidden'>
            <Image src={'/Asal.png'} height={1000} width={1000} alt="brand-identity" className='w-[min(600px,100vw)] md:h-[600px] h-[400px]  object-cover mx-auto saturate-100 object-[50%_32%]' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe