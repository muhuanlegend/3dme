import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin((ScrollTrigger))


const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]
        projects.forEach((card, index) => {
            gsap.fromTo(card, {
                y: 50,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    target: card,
                    start: 'top bottom-=100'
                }
            })
        },)
        gsap.fromTo(sectionRef.current, {
            opacity: 0,
        }, { opacity: 1, duration: 1.5 })
    }, [])

    return (
        <section ref={sectionRef} id='work' className='app-showcase'>
            <div className="w-full">
                <div className="showcaselayout">
                    {/* Left */}
                    <div className="first-project-wrapper" ref={project1Ref} >
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Ryde" />
                        </div>
                        <div className="text-content">
                            <h2>See - A light Weight Video Conferencing App</h2>
                            <p className="text-white-50 md:text-xl">
                                A Web Application App built with Next Js alongside tailwind css and stream io, To make Online face to face communication easy
                            </p>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="project-list-wrapper overflow-hidden" ref={project2Ref} >
                        <div className="project">
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src="/images/project2.png" alt="library management platform" />
                            </div>
                            <h2>Bera Sharp, AI Interview Assistant</h2>
                        </div>
                        <div className="project" ref={project3Ref} >
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src="/images/project3.png" alt="YC directory" />
                            </div>
                            <h2>Fizzi - A landing Page for fizzi soda a refreshing drink</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection