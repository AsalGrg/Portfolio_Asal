'use client'
import SectionHeading from '@/components/SectionHeading'
import ProjectCard from '@/components/ProjectCard'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger) // 👈 add this


const Projects = () => {
    const containerRef = useRef(null)

    useGSAP(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 800px)", () => {
            const wrappers = gsap.utils.toArray('.project-wrapper')

            console.log(wrappers)
            let top = 20
            wrappers.map(wrapper => {
                top += 2 * top
                const small = wrapper.querySelector('.project-small')  // 👈 get child elements
                const big = wrapper.querySelector('.project-big')
                const images = wrapper.querySelectorAll('.product-image')
                console.log(images)
                // One timeline, one ScrollTrigger on the timeline
                gsap.timeline({
                    scrollTrigger: {
                        trigger: wrapper,
                        scrub: 1,
                        start: `top 5%`,
                        end: 'bottom 60%',        // 👈 controls how long the pin lasts
                        pin: true,           // 👈 pins the wrapper itself
                        pinSpacing: true,    // 👈 pushes content below down, prevents overlap
                        markers: true,
                    }
                })
                    .from(small, { y: 700, ease: 'power1.out' })
                    .fromTo(big, { y: 100 }, {y: 0, ease: 'power1.out'},"<")
                    .fromTo(images,
                        { objectPosition: '50% 30%' },
                        { objectPosition: '50% 10%', ease: 'none' },
                        "<")
            })

        })

    }, { scope: containerRef })
    return (
        <section
            className='h-fit bg-black'
        >
            <div className='section-content max-w-[1600px]! h-fit'
                ref={containerRef}
            >
                <SectionHeading subtitle={"Creating experiences with these building blocks."} heading={"Projects"} />

                <div className='lg:flex lg:flex-col space-y-10 h-fit'>
                    <div className='project-wrapper
                    '>
                        <ProjectCard photo={'/projects/HemaHome.png'} title={'Hema Home Stay'} websiteLink={"https://hema-home-stay.vercel.app/"} />
                        <ProjectCard isbig={true} photo={"/projects/BNova.png"} title={'Blue Nova Agency'} websiteLink={"https://blue-nova-agency.vercel.app/"} />
                    </div>

                    <div className='project-wrapper
                    z-10
                    '>

                        <ProjectCard isbig={true} photo={'/projects/Romans.png'} title={'Romans Roofing LLC'} websiteLink={"https://romansroofing.net/"} />
                        <ProjectCard photo={'/projects/HemaHome.png'} title={'Hema Home Stay'} websiteLink={"https://hema-home-stay.vercel.app/"} />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects