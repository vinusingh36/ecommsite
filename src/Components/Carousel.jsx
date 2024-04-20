import { useEffect, useRef, useState } from 'react'
import img1 from '../Assets/Carousel/img1.webp'
import img2 from '../Assets/Carousel/img2.avif'
import img3 from '../Assets/Carousel/img3.webp'
import img4 from '../Assets/Carousel/img4.webp'
import img5 from '../Assets/Carousel/img5.jpg'
import '../CSS/Carousel.css'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

let slides = [
    {
        src: img5,
        alt: "img5"
    },
    {
        src: img2,
        alt: "img1"
    },
    {
        src: img4,
        alt: "img4"
    },
    {
        src: img1,
        alt: "img2"
    },
    {
        src: img3,
        alt: "img3"
    },

]

const Carousel = () => {

    const [slide, setSlide] = useState(0);
    const intervalId = useRef(null);

    const nextSlide = () => {
        setSlide(slide === slides.length - 1 ? 0 : slide + 1)

    }

    const prevSlide = () => {
        setSlide(slide === 0 ? slides.length - 1 : slide - 1)
    }

    useEffect(() => {
        if (intervalId.current) {
            clearInterval(intervalId.current)
        }

        intervalId.current = setInterval(() => {
            nextSlide();
        }, 5000)

        return () => {
            clearInterval(intervalId.current)
        }

    }, [slide])


    return (
        <div className='carousel'>
            <ChevronLeftIcon className="arrow arrow-left" w={75} h={75} color="white.600" onClick={prevSlide} />
            {
                slides.map((data, idx) => {
                    return (
                        <img src={data.src} alt={data.alt} className={slide === idx ? "slide" : "slide-hidden"} key={idx} />
                    )
                })
            }
            <ChevronRightIcon className="arrow arrow-right" w={75} h={75} color="white.600" onClick={nextSlide} />
            <div className='indicators'>
                {
                    slides.map((_, idx) => {
                        return (
                            <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Carousel;