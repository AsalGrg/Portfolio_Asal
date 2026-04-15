'use client'
import React, {useRef} from 'react'
import HeroBG from '../components/HeroBG';
import {useGSAP} from "@gsap/react";
import gsap from 'gsap'
import {SplitText}  from "gsap/SplitText";

const Hero = () => {

    const containerRef= useRef(null)

    useGSAP(() => {

        const splitText= SplitText.create('#hero-text', {
            type: "chars,lines",
            mask: 'chars',
        })

        console.log(splitText)
        gsap.timeline()
            .fromTo([splitText.chars, "#hero-para"], {
                y: 100,
                opacity:0,
                filter: 'blur(9px)'
            }, {
                y: 0,
                opacity:1,
                stagger:0.02,
                duration: 0.6,
                filter: 'blur(0px)',
                ease: 'power1.inOut'
            })
            .to("#difference-overlay", {
                display: 'block',
                duration: 0.2,
                ease: 'power1.in'
            }, "+=0.2")
            .to(".bg-live", {
                opacity: 1,
                duration: 0.2,
                ease: 'power1.in'
            }, '<')
            .to("#difference-overlay", {
                display: 'none',
                duration: 0.2,
                ease: 'power1.in'
            })
            .to(".bg-live", {
                opacity: 0,
                duration: 0.2,
                ease: 'power1.in'
            }, '<')
            .to("#difference-overlay", {
                display: 'block',
                duration: 0.2,
                ease: 'power1.in'
            }, '+=0.4')
            .to(".bg-live", {
                opacity: 1,
                duration: 0.1,
                ease: 'power1.in'
            }, '<')
            .to("#difference-overlay", {
                opacity: 0,
                duration: 0.2,
                ease: 'power1.in'
            }, '+=0.4')
    }, {scope: containerRef})


    return (
        <section className='sticky h-[min(100vh,840px)] -z-10 bg-white inset-0
        ' ref={containerRef}>
            <div className='content relative h-full'>
                <div className='my-6 mb-6 h-[min(600px,100vh)] flex flex-col'>
                    <h1 className="heading-big lg:!text-start "
                    id={'hero-text'}
                    >
                        <span>Creating websites that make you Say</span>
                        <span className="heading-big text-primary"> I Want More</span>
                    </h1>
                    <div className='justify-end hidden lg:flex'
                    id={'hero-para'}
                    >
                        <p className='para opacity-70 font-sans w-72'>I make creating websites easy for you.<b> Wanna know how?</b>  It’s really simple, you just tell me your idea and I do all the designing and development as your needs.  Its quiet easy right.</p>
                    </div>
                </div>
            </div>

            <div className='absolute inset-0 overflow-hidden
                bg-linear-to-b from-transparent to-black/20 from-60% w-full
                flex items-center justify-center
                '>
                <div className='absolute inset-0 flex justify-center -z-20'>
                    <HeroBG/>
                </div>

                {/* <Image src={'/Wing.svg'} width={1000} height={1000} className='max-w-[416px] -z-30 absolute bottom-24' /> */}
            </div>

            <div className="absolute inset-0 hidden mix-blend-difference bg-white pointer-events-none z-10"
            id={"difference-overlay"}
            />
        </section >
    )
}

export default Hero