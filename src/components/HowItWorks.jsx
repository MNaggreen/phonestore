import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { animateWithGsap } from '../utils/animations'

const HowItWorks = () => {
  const videoRef = useRef()

  useGSAP(() => {
    /* анимация для картинки процессора */
    gsap.from('#chip', {
        /* сработает с этих параметров */
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom',
      },
      /*что именно произойдет */
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut',
    })

    /* анимация для текста под картинкой */
    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
    })
  }, [])

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro процессор.
            <br /> Чудовищный выигрыш для игр.
          </h2>

          <p className="hiw-subtitle">
          Это здесь и сейчас. Крупнейший редизайн в истории графических процессоров Apple.
          </p>
        </div>

{/* рамка для видео */}
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            {/* само видео */}
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">
            Honkai: Star Rail
          </p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
            A17 Pro - это совершенно новый класс чипов для iPhone, который обеспечивает{' '}
              <span className="text-white">
              лучшую графическую производительность на сегодняшний день
              </span>
              .
            </p>

            <p className="hiw-text g_fadeIn">
              Мобильные{' '}
              <span className="text-white">
              игры будут выглядеть и ощущаться захватывающе
              </span>
              , с невероятно детализированным окружением и персонажами.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">Новый</p>
            <p className="hiw-bigtext">Видео Процессор <br/> Pro-класс GPU</p>
            <p className="hiw-text">6 ядер</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
