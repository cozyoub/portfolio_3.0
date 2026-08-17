import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.4,                          // 1.8 → 2.4, 관성 지속시간 더 길게
      easing: (t) => 1 - Math.pow(1 - t, 5),  // easeOutQuint, 감속 곡선 더 부드럽게
      smoothWheel: true,
      wheelMultiplier: 0.6,                   // 0.8 → 0.6, 휠 한 번에 이동거리 더 줄임
      touchMultiplier: 1.2,                   // 1.5 → 1.2, 터치 스크롤도 과하지 않게
      syncTouch: true,                        // 터치 디바이스에서도 smooth 적용
      infinite: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);
}