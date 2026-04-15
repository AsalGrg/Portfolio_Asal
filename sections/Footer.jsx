import React from 'react';
import Image from "next/image";

const Footer = () => {

    return (
        <footer className={'h-[min(100vh,1400px)]'}>
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
                <h3 className={"text-center"}>
                    <span className={'font-bais text-[27vw]/[0%]'}>Asal</span>
                    <span className={'font-bebas text-[22vw]/[0%] font-semibold'}>Gurung</span>
                </h3>

                <div className={'flex flex-wrap w-full justify-between section-content pt-4!'}>
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