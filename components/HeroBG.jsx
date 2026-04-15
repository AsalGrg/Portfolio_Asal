
'use client'

import { useEffect, useRef } from "react";
// then import the component
import UnicornScene from "unicornstudio-react";
import Image from "next/image";

// documentation: https://www.npmjs.com/package/unicornstudio-react
export default function HeroBG() {

  const movementRef = useRef(null)
  const btnRef = useRef(null)

  useEffect(() => {
    const container = movementRef.current
    const btn = btnRef.current
    if (!container || !btn) return

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()

      // Mouse position relative to the container
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Offset so the button center follows the cursor
      const btnW = btn.offsetWidth
      const btnH = btn.offsetHeight

      // Clamp so the button stays within bounds
      const clampedX = Math.min(Math.max(x - btnW / 2, 0), rect.width - btnW)
      const clampedY = Math.min(Math.max(y - btnH / 2, 0), rect.height - btnH)

      btn.style.position = "absolute"
      btn.style.left = `${clampedX}px`
      btn.style.top = `${clampedY}px`
    }

  container.addEventListener("mousemove", handleMouseMove)
  })


  return (

    <div className="bg-primary relative
    bg-live
    opacity-0
    ">
      <UnicornScene
        projectId="iFW7Pr4o1AOQcJLcytc0"
        width="1440px"
        height="940px"
        className={"lg:block hidden"}
        scale={1}
        dpi={1.5}
        lazyLoad={true}
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.5/dist/unicornStudio.umd.js"
      />

      <Image src={'/me.webp'} alt={"Me"}
             height={1000} width={1000}
      className={"object-center w-full h-full object-cover"}
      />

      <div className="absolute left-[50%] right-0 h-[min(600px,100vh)] top-16 w-100 -translate-x-[50%] flex items-end justify-center"
        ref={movementRef}
      >
        <button className="py-4 px-10 border-white border-2 bg-primary/80 backdrop-blur-3xl-3xl rounded-lg text-white para font-bold!"
          ref={btnRef}
        >Hire me</button>
      </div>
    </div>

  );
}