import gsap from 'gsap'

/* нужно сделать так обязательно */
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

/* анимация для секции fetures */
export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',/* первый раз смотрим, вовращаемся и по новой */
      start: 'top 85%',
      ...scrollProps,
    },
  })
}

export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut',
  })
/* применяеи анимацию согласно полученным данным */
  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut',
    },
    '<'
  )
/* применяеи анимацию согласно полученным данным */
  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut',
    },
    '<'
  )
}
