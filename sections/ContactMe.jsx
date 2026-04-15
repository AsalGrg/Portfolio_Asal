import React from 'react';
import Image from "next/image";

const ContactMe = () => {

    return(

        <div className={'flex flex-wrap-reverse min-h-[800px]'}>
            {/*<div className={'w-[30%]' +*/}
            {/*        // 'mask-[url(/logo.svg)] mask-no-repeat mask-size-[350]' +*/}
            {/*        'bg-black' }>*/}
            {/*    sjdsjdjd*/}
            {/*</div>*/}

            <div className={'lg:w-[40%] w-full min-h-[50vh]' +
                ' mask-no-repeat mask-contain mask-center ' +
                'bg-black mask-exclude'}
            style={{
                maskImage:'url("/wing.svg"), linear-gradient(#fff, #fff)',
                maskPosition: 'center',
                maskComposite: 'exclude',
                maskRepeat: 'no-repeat',
            }}
            >
            </div>
            <section className={'relative lg:h-[min(120vh,1200px)] min-h-[600px] bg-black w-full lg:w-[60%]'}>
                <div className={"section-content h-full"}>
                    <div className={'flex flex-col items-start justify-center h-full w-[95%] lg:w-[80%] mx-auto gap-6 lg:gap-10 '}>
                        <div className={'flex flex-wrap lg:flex-row gap-4 lg:gap-5 items-end justify-start text-white w-full'}>
                            <div className={''}>
                                <h3 className={'heading text-6xl! text-end!'}>Email</h3>
                                <h3 className={'heading text-6xl! text-end!'}>LinkedIn</h3>
                            </div>
                            <div className={'flex-1'}>
                                <h3 className={'text-4xl lg:text-6xl font-semibold font-bebas! text-start! break-words'}>gurung.asal.06@gmail.com</h3>
                                <h3 className={'text-4xl lg:text-6xl font-semibold font-bebas! text-start! break-words'}>Asal Gurung</h3>
                            </div>
                        </div>

                        <div className={"flex flex-wrap lg:flex-row gap-4 lg:gap-10 items-start justify-start text-white w-full"}>
                            <div className={''}>
                                <h3 className={'heading text-6xl! lg:text-base text-end!'}>Socials</h3>
                            </div>
                            <div className={'flex-1'}>
                                <h3 className={'text-4xl lg:text-6xl  font-semibold font-bebas! text-start! break-words'}>Discord</h3>
                                <h3 className={'text-4xl lg:text-6xl  font-semibold font-bebas! text-start! break-words'}>Instagram</h3>
                                <h3 className={'text-4xl lg:text-6xl  font-semibold font-bebas! text-start! break-words'}>Whatsapp</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default ContactMe