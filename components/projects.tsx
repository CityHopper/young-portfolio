import React, {useState, useLayoutEffect, useRef} from 'react'
import Image from 'next/image';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const projects = [
    {
        title: "Salar de Atacama",
        src: "salar_de_atacama.jpg"
    },
    {
        title: "Valle de la luna",
        src: "valle_de_la_muerte.jpeg"
    },
    {
        title: "Miscanti Lake",
        src: "miscani_lake.jpeg"
    },
    {
        title: "Miniques Lagoons",
        src: "miniques_lagoon.jpg"
    },
]

export default function Index() {
    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
        })
    }, [])

    return (
        <div ref={container} className={`relative mt-[25vh] p-[10%]`}>
            <div className={`flex h-[700px] justify-between gap-[5%]`}>
                <div ref={imageContainer} className={`relative h-full w-[40%]`}>
                    <Image
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                        priority={true}
                        className={`object-cover`}
                    />
                </div>
                <div className={`flex h-full w-[20%] text-[1.6vw] last-of-type:items-end last-of-type:text-[1vw]`}>
                    <p>The flora is characterized by the presence of high elevation wetland, as well as yellow straw,
                        broom sedge, tola de agua and tola amaia.</p>
                </div>
                <div className={`flex h-full w-[20%] text-[1.6vw] last-of-type:items-end last-of-type:text-[1vw]`}>
                    <p>Some, like the southern viscacha, vicuña and Darwins rhea, are classified as endangered species.
                        Others, such as Andean goose, horned coot, Andean gull, puna tinamou and the three flamingo
                        species inhabiting in Chile (Andean flamingo, Chilean flamingo, and Jamess flamingo) are
                        considered vulnerable.</p>
                </div>
            </div>

            <div className={`flex flex-col relative mt-[200px]`}>
                {
                    projects.map((project, index) => {
                        return <div key={index} onMouseOver={() => {
                            setSelectedProject(index)
                        }} className={`w-full uppercase text-[3vw] border-b border-red-500 flex justify-end`}>
                            <h2 className={`m-0 mt-[40px] mb-[20px] cursor-default`}>{project.title}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    )
}