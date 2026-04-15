
import React from 'react'
import TechCard from '@/components/TechCard'
import SectionHeading from "@/components/SectionHeading";
const TechStack = () => {
    return (
        <section className='
    h-fit
    bg-black
    '>

            <div className="section-content space-y-12">
                <SectionHeading subtitle={"Creating experiences with these building blocks."} heading={"Tech Stacks"}/>
                <div>
                    <ul className='grid grid-cols-12 auto-rows-auto'>
                        <TechCard weight={4} image={"techs/react.svg"} title={"React.js"}/>
                        <TechCard weight={2} image={"techs/next.svg"} title={"Next.js"}/>
                        <TechCard weight={4} image={"techs/three.svg"} title={"Three.js"}/>
                        <TechCard weight={1} image={"techs/javascript.svg"} title={"Javascript"}/>
                        <TechCard weight={1} image={"techs/typescript.svg"} title={"Typescript"}/>
                        <TechCard weight={2} image={"techs/git.svg"} title={"Git"}/>
                        <TechCard weight={2} image={"techs/redux.svg"} title={"Redux"}/>
                        <TechCard weight={2} image={"techs/figma.svg"} title={"Figma"}/>
                        <TechCard weight={2} image={"techs/java.svg"} title={"Java"}/>
                        <TechCard weight={2} image={"techs/database.svg"} title={"Databases"}/>
                        <TechCard weight={1} image={"techs/openapi.svg"} title={"Open API"}/>
                        <TechCard weight={1} image={"techs/php.svg"} title={"Php"}/>
                        <TechCard weight={4} image={"techs/node.svg"} title={"Node.js"} />
                        <TechCard weight={2} image={"techs/mongo.svg"} title={"Mongo DB"}/>
                        <TechCard weight={2} image={"techs/wordpress.svg"} title={"Wordpress"}/>
                        <TechCard weight={4} image={"techs/springboot.svg"} title={"Spring boot"}/>
                        
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default TechStack