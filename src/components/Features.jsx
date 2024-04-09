import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../utils';
import gsap from 'gsap';

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      /* видео будет воспроизводиться занаго если мы прокрутим вверх или даже вниз и обратно */
      onComplete: () => {
        videoRef.current.play();
      }
    })

    /* далее мы проводим анимацию уже в файле animations в папке utils */
    animateWithGsap('#features_title', { y:0, opacity:1})
    /* для картинок */
    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1' },
      { scrub: 5.5 }
    );
    /* для текстка который ниже картинок */
    animateWithGsap(
      '.g_text',
      {y:0, opacity: 1,ease: 'power2.inOut',duration: 1}
    )
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative ">
      <div className="screen-max-wdith">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">Ознакомьтесь с полной историей.</h1>
        </div>
        
        <div className="flex flex-col justify-center items-center ">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">Выкованный из титана.</h2>
          </div>

{/* 3 картинки с анимацией */}
          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video playsInline id="exploreVideo" className="w-full h-full object-cover object-center" preload="none" muted autoPlay ref={videoRef}>
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="flex-1 h-[50vh]">
                  <img src={explore1Img} alt="titanium" className="feature-video g_grow" />
                </div>
                <div className="flex-1 h-[50vh]">
                  <img src={explore2Img} alt="titanium 2" className="feature-video g_grow" />
                </div>
              </div>

{/* текст под картинками */}
              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro это {' '}
                    <span className="text-white">
                    первый iPhone, выполненный из титана аэрокосмического класса
                    </span>,
                    таким образом, используется тот же сплав, который используют космические аппараты для полетов на Марс.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                  Титан обладает одним из лучших соотношений прочности к весу среди всех металлов, что делает их нашими {' '}
                    <span className="text-white">
                    самые легкие Pro модели из когда-либо существовавших.&nbsp;
                    </span>
                    Вы заметите разницу в тот момент, когда возьмете его в руки.
                  </p>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features