import React from 'react'

const ShowcaseSection = () => {
    return (
        <div id='work' className='app-showcase'>
            <div className="w-full">
                <div className="showcaselayout">
                    {/* Left */}
                    <div className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Ryde" />
                        </div>
                        <div className="text-content">
                            <h2>On-Demand Rides Made Simple with a Powerful, user friendly app called Ryde</h2>
                            <p className="text-white-50 md:text-xl">
                                An App built with reactNAtive , expo 7 tailwind css for a fast , user-friendly experience
                            </p>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project">
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src="/images/project2.png" alt="library management platform" />
                            </div>
                            <h2>Libary ManagementPlatform</h2>
                        </div>
                        <div className="project">
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src="/images/project3.png" alt="YC directory" />
                            </div>
                            <h2>YC directory-  A start Up showcase</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowcaseSection