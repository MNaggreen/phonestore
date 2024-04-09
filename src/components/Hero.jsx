import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'
/* import { s } from 'vite/dist/node/types.d-aGj9QkWt'; */

const Hero = () => {
  /* проверяем размер экрана и в зависимости подменяем видео */
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  )

  /* функция которая проверяет ширину */
  const handleVideoSrcSet = () => {
    if (windows.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  /* функция проверяющая размер окна */
  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet)
    /* обязательно удаляем после использлования */
    return window.removeEventListener('resize', handleVideoSrcSet)
  })

  useGSAP(() => {
    /* анимация заголовка */
    gsap.to('#hero', { opacity: 1, delay: 2 })

    /* анимация кнопки */
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  })
  return (
    <section className="w- full nav-height bg-black">
      <div className="h-5/6 w- full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>

        {/* видео */}
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
             muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* кнопка */}
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Купить
        </a>
        <p className="font-normal text-xl">От ХХХ₽/месяц или ХХХХ₽</p>
      </div>
    </section>
  )
}

export default Hero
