import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from 'react'
import { hightlightsSlides } from '../constants'
import { pauseImg, playImg, replayImg } from '../utils'
const VideoCarousel = () => {
  const videoRef = useRef([])
  const videoSpanRef = useRef([])
  const videoDivRef = useRef([])

  const [video, setVideo] = useState({
    isEnd: false,
    statPlay: false,
    videoID: 0,
    isLastVideo: false,
    isPlaying: false,
  })

  const [loadedData, setLoadedData] = useState([])

  useGSAP(() => {
    // slider animation to move the video out of the screen and bring the next video in
    /* gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut", */ // show visualizer https://gsap.com/docs/v3/Eases
    /* }); */

    // video animation to play the video when it is in the view
    gsap.to('#video', {
      /* когда видео первый раз попадает в обзор */
      scrollTrigger: {
        trigger: '#video',
        toggleActions: 'restart none none none',
      },
      /* когда видео закончилось проигрываться */
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }))
      },
    })
  }, [/* isEnd, videoId */])

  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause()
      } else {
        startPlay && videoRef.current[videoId].play()
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData])

  useEffect(() => {
    const currentProgress = 0
    let span = videoSpanRef.current
    /* если у нас есть видео то мы ьерем текущее видео */
    if (span[videoId]) {
      //  анимированик видео
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {},
        onComplete: () => {},
      })
    }
  }, [videoId, startPlay])

  // vd id is the id for every video until id becomes number 3
  const handleProcess = (type, i) => {
    switch (type) {
      case 'video-end':
        setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }))
        break

      case 'video-last':
        setVideo((pre) => ({ ...pre, isLastVideo: true }))
        break

      case 'video-reset':
        setVideo((pre) => ({ ...pre, videoId: 0, isLastVideo: false }))
        break

      case 'pause':
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }))
        break

      case 'play':
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }))
        break

      default:
        return video
    }
  }

  const handleLoadedMetaData = (i, e) => setLoadedData((pre) => [...pre, e])

  return (
    <>
      <div className="flex items-center">
        {/* тут формируется картинка с видео и текстом */}
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl bg-black">
                <video
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  /* устанавливаем ссылку ref */
                  ref={(el) => (videoRef.current[i] = el)}
                  onPlay={() => {
                    setVideo((prevVideo) => ({
                      ...prevVideo,
                      isPlaying: true,
                    }))
                  }}
                  /* когда видео загружено передаем индекс и 'dtyn*/
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text, i) => (
                  <p key={i} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* кнопка проигрывания и прогресс проигрывание*/}
      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
              ref={(el) => (videoDivRef.current[i] = el)}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>

        {/* кнопка паузы проигрывания */}
        <button className="control-btn">
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? 'replay' : !isPlaying ? 'play' : 'pause'}
            onClick={
              isLastVideo
                ? () => handleProcess('video-reset')
                : !isPlaying
                ? () => handleProcess('play')
                : () => handleProcess('pause')
            }
          />
        </button>
      </div>
    </>
  )
}

export default VideoCarousel
