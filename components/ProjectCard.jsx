'user client'
import Image from 'next/image'
import React, {useEffect, useRef} from 'react'
import {useGSAP} from "@gsap/react";

const ProjectCard = ({ isbig = false, title, websiteLink, photo }) => {


    const containerRef = useRef(null);
    const mouseTrackerRef= useRef(null)

    function mouseTrack() {
        const viewMouseTracker = mouseTrackerRef.current;
        const container = containerRef.current;

        const handleMouseMove = (event) => {
            const rect = container.getBoundingClientRect(); // ✅ viewport-relative
            const x = ((event.clientX - rect.left) / rect.width) *80+ "%";
            const y = ((event.clientY - rect.top) / rect.height) *80+ "%";

            viewMouseTracker.style.transition = "scale 0.4s";
            viewMouseTracker.style.ease= "linear"
            viewMouseTracker.style.scale = 1;
            viewMouseTracker.style.left = x;
            viewMouseTracker.style.top = y;
        };

        const handleMouseLeave = () => {        // ✅ use mouseleave on container
            viewMouseTracker.style.transition = "0.7s";
            viewMouseTracker.style.scale = 0;
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave); // ✅ not document.onmouseout

        return () => {                          // ✅ cleanup to avoid listener leaks
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }

    useEffect(() => {
        return mouseTrack(); // ✅ cleanup on unmount
    }, []);
  return (

    <div className={`
      w-full
      ${isbig ? 'lg:w-[50%] project-big' : 'lg:w-[35%] project-small'} space-y-2`
    }
    >

      <div className='space-y-1'>
        <p className='para opacity-70 text-white'>1/4</p>

        <div className=' aspect-square overflow-hidden
            relative
        '
             ref={containerRef}
        >
          <Image src={photo} width={1000} height={1000} alt="Me" className='product-image w-full h-full object-cover' />
            <a href={websiteLink} target='_blank'>
                <div className="absolute w-40 aspect-square rounded-full bg-primary/60 backdrop-blur-lg z-10 top-0 mouse-tracker
            flex items-center justify-center
            scale-0
            "
                 ref={mouseTrackerRef}
            >
                <p className={'para text-white'}>View Project</p>
            </div>
            </a>
        </div>
      </div>
      <div>
         <h3 className='text-start text-4xl text-white'>{title}</h3>
       </div>
    </div>

  )
}

export default ProjectCard