'use client'

import React, {useRef} from 'react';
import Image from "next/image";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/SplitText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {

    const containerRef = useRef();

    useGSAP(() => {

        const splitHeading = SplitText.create('#footer-heading', {
                type: "chars,lines",
            }
        )

        console.log(splitHeading)

        gsap.timeline({
            scrollTrigger:{
                trigger: containerRef.current,
                start: 'top 20%',
                end: 'bottom 80%',
                markers:true,
                toggleActions: "play reverse play reverse",
            }
        })
            .fromTo(splitHeading.chars, {
            y: 100,
            opacity:0

        },{
            y:0,
                opacity:1,
            stagger:{
                from:'center',
                each: 0.02,
            },
            duration: 0.6,
            ease: 'power1.inOut'
        })
            .fromTo("#footer-content", {
                y:100,
                opacity:0,
            }, {
                y:0,
                opacity:1,
                ease: 'power1.out'
            })
    },
        {scope: containerRef})
    return (
        <footer className={'h-[min(100vh,1400px)]'}
        ref={containerRef}
        >
            <div className={'fixed inset-0 -z-40'}>
                <video
                    loop={true}
                    muted
                    autoPlay
                    preload={'none'}
                    className={'w-full h-full object-fill'}
                    playsInline={true}
                    src={'https://res.cloudinary.com/dxbwk0z1y/video/upload/v1775984025/12987889-hd_1920_1080_30fps_xufhfr.mp4'}
                />
                <div className={'absolute inset-0 bg-transparent backdrop-blur-md'}></div>
            </div>


            <div className={"h-full flex flex-col items-center text-white justify-end mix-blend-difference fixed inset-0 -z-30"}>
                <h3 className={"text-center"} id={'footer-heading'}>
                    <span className={'font-bais text-[27vw]/[0%]'}>Asal</span>
                    <span className={'font-bebas text-[22vw]/[0%] font-semibold'}>Gurung</span>
                </h3>

                <div className={'flex flex-wrap w-full justify-between section-content pt-4!'}
                id={'footer-content'}
                >
                    <div className={'flex bg-red flex-wrap items-start gap-x-8'}>
                        <p className={'para text-3xl!'}>Home</p>
                        <p className={'para text-3xl!'}>About me</p>
                        <p className={'para text-3xl!'}>Projects</p>
                        <p className={'para text-3xl!'}>Contact</p>
                    </div>
                    <p className={'para text-3xl!'}>Back to top</p>
                </div>
            </div>



        </footer>
    )
}

export default Footer;