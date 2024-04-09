import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { watchImg, rightImg } from '../utils'
import VideoCarousel from './VideoCarousel'

const Highlights = () => {
  /* анимация для загловока */
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 })
    /* stagger Дает нам возможность сделать так чтобы элементы появляись одни за другими */
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
  }, [])

  return (
    <section
      id="highlights"
      className="w-screen  h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
          Получить сведения.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Смотреть фильм
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Смотреть событие
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>

{/* видео карусьл */}
<VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights
