'use client';
import {useEffect, useState} from "react";
import {AnimatePresence} from 'framer-motion';
import Intro from '@/components/intro';
import About from '@/components/about';
import Projects from '@/components/projects';
import Preloader from '@/components/preloader';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll'))?.default
                const locomotiveScroll = new LocomotiveScroll();

                setTimeout(() => {
                    setIsLoading(false);
                    document.body.style.cursor = 'default'
                    window.scrollTo(0, 0);
                }, 2000)

            }
        )()
    }, [])
    return (
        <main className="flex min-h-screen flex-col items-center justify-between font-roboto">
            <AnimatePresence mode='wait'>
                {/*{isLoading && <Preloader/>}*/}
                <Preloader/>
            </AnimatePresence>
            {/*<Intro/>*/}
            {/*<About/>*/}
            {/*<Projects/>*/}
        </main>
    );
}
