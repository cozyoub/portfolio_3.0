import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // blur 애니메이션
      const randomX = random(-400, 400);
      const randomY = random(-200, 200);
      const randomTime = random(6, 12);
      const randomTime2 = random(5, 6);
      const randomAngle = random(-30, 150);

      const blurs = gsap.utils.toArray(".blur");

      blurs.forEach((blur) => {
        gsap.set(blur, {
          x: randomX(-1),
          y: randomX(1),
          rotation: randomAngle(-1),
        });

        moveX(blur, 1);
        moveY(blur, -1);
        rotate(blur, 1);
      });

      function rotate(target, direction) {
        gsap.to(target, {
          duration: randomTime2(),
          rotation: randomAngle(direction),
          ease: "sine.inOut",
          onComplete: rotate,
          onCompleteParams: [target, direction * -1],
        });
      }

      function moveX(target, direction) {
        gsap.to(target, {
          duration: randomTime(),
          x: randomX(direction),
          ease: "sine.inOut",
          onComplete: moveX,
          onCompleteParams: [target, direction * -1],
        });
      }

      function moveY(target, direction) {
        gsap.to(target, {
          duration: randomTime(),
          y: randomY(direction),
          ease: "sine.inOut",
          onComplete: moveY,
          onCompleteParams: [target, direction * -1],
        });
      }

      function random(min, max) {
        const delta = max - min;
        return (direction = 1) => (min + delta * Math.random()) * direction;
      }

      const tl = gsap.timeline({ delay: 0.2 });

tl.fromTo(
  ".hero-section__txt p",
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
).fromTo(
  ".hero-section__txt h1",
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
  "-=0.5"
);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="hero-section" ref={heroRef}>
        <div className="blur"></div>
        <div className="blur"></div>
        <div className="blur"></div>

        <div className="inner">
          <div className="hero-section__txt">
            <div>
  <p>사용자의 작은 불편에서 시작해</p>
  <p><span>더 나은 경험을 설계하는</span> 이유빈입니다.</p>
</div>
            <h1>Portfolio</h1>
          </div>
        </div>
      </div>
    </>
  );
}