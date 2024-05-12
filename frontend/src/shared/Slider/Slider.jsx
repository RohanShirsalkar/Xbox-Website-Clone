import React, { useEffect, useState } from 'react'
import "./slider.scss"

export default function Slider() {
    const [currentIndex, setCurrentindex] = useState(0);
    const [isMobileView, setIsMobileView] = useState(false);
    const images = [
        { url: "src/Homepage-slider-image-1.jpg" },
        { url: "src/Homepage-slider-image-2.jpg" },
        { url: "src/Homepage-slider-image-3.jpg" },
        { url: "src/Homepage-slider-image-3.jpg" },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 480) {
                setIsMobileView(true)
            } else {
                setIsMobileView(false)
            }
        };

        // Add event listener to window resize
        window.addEventListener('resize', handleResize);

        // Initial call to set initial size
        handleResize();

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    const handleNext = () => {
        if (currentIndex < (images.length - 1)) {
            setCurrentindex(currentIndex + 1);
        } else if (currentIndex === (images.length - 1)) {
            setCurrentindex(0);
        }
    }

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentindex(currentIndex - 1)
        } else {
            setCurrentindex(images.length - 1)
        }
    }

    const autoPlaySlides = () => {
        console.log("autoplay");
        if (currentIndex < (images.length - 1)) {
            setCurrentindex(currentIndex + 1)
        } else if (currentIndex === (images.length - 1)) {
            setCurrentindex(0)
        }
    }

    return (
        <div id='slider-component'>
            <div className="btn-container">
                <button onClick={handlePrevious}><img src="src\assets\icons\previous.png" width="30px" alt="" /></button>
                <button onClick={handleNext}><img src="src\assets\icons\next.png" width="30px" alt="" /></button>
            </div>

            {
                !isMobileView &&

                <div className="text-container">
                    {
                        currentIndex === 0 &&
                        <div className='text-box slide-1-text'>
                            <div className='badge'>
                                NOW AVAILABLE
                            </div>
                            <h3>Power Your Dreams</h3>
                            <span>Forza Motorsport on Xbox Series X</span>
                            <div className='btn-box'>
                                {/* <button>Learn More</button> */}
                                <a href="">BUY NOW</a>
                            </div>
                        </div>
                    }

                    {
                        currentIndex === 1 &&
                        <div className='text-box slide-2-text'>
                            <div className='badge'>
                                NOW AVAILABLE
                            </div>
                            <h3>Xbox Series S - 1TB</h3>
                            <span>Power Your Dreams</span>
                            <div className='btn-box'>
                                {/* <button>Learn More</button> */}
                                <a href="">BUY NOW</a>
                            </div>
                        </div>
                    }

                    {
                        currentIndex === 2 &&
                        <div className='text-box slide-3-text'>
                            <div className='badge'>
                                NEW
                            </div>
                            <h3>Everything you need to play</h3>
                            <span>Get an Xbox Series S and 100s of games with 3 months of Game Pass Ultimate</span>
                            <div className='btn-box'>
                                {/* <button>Learn More</button> */}
                                <a href="">BUY NOW</a>
                            </div>
                        </div>
                    }
                </div>
            }

            <div className='slider-container' >
                <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((e, i) => {
                        return < img key={i} src={images[i].url} width="100%" alt="" />
                    })}
                </div>

                {
                    isMobileView &&
                    <div className={"slider-container-bottom"} style={{ backgroundColor: currentIndex === 2 && "#e6e6e6" }} >
                        {
                            currentIndex === 0 &&
                            <div className='mobile-text-box mobie-slide-1-text'>
                                <div className='badge'>
                                    NOW AVAILABLE
                                </div>
                                <h3>Power Your Dreams</h3>
                                <span>Forza Motorsport on Xbox Series X</span>
                                <div className='btn-box'>
                                    {/* <button>Learn More</button> */}
                                    <a href="">BUY NOW</a>
                                </div>
                            </div>
                        }
                        {
                            currentIndex === 1 &&
                            <div className='mobile-text-box mobie-slide-1-text'>
                                <div className='badge'>
                                    NOW AVAILABLE
                                </div>
                                <h3>Xbox Series S - 1TB</h3>
                                <span>Power Your Dreams</span>
                                <div className='btn-box'>
                                    {/* <button>Learn More</button> */}
                                    <a href="">BUY NOW</a>
                                </div>
                            </div>
                        }
                        {
                            currentIndex === 2 &&
                            <div style={{ color: 'black' }} className='mobile-text-box mobie-slide-1-text'>
                                <div className='badge'>
                                    NEW
                                </div>
                                <h3>Everything you need to play</h3>
                                <span>Get an Xbox Series S and 100s of games with 3 months of Game Pass Ultimate</span>
                                <div className='btn-box'>
                                    {/* <button>Learn More</button> */}
                                    <a href="">BUY NOW</a>
                                </div>
                            </div>
                        }

                    </div>
                }


            </div>

        </div>
    )
}
