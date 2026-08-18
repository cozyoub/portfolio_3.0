import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useScrollSquish from "../hooks/useScrollSquish";

gsap.registerPlugin(ScrollTrigger);

const HELLO_TEXT = "Hello.";

export default function About() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  // .about__item은 CSS에 padding-bottom: 30px만 있음 (padding-top 없음)
  useScrollSquish(sectionRef, ".about__item", { amount: 12, sides: ["bottom"] });

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".about-txt__title", {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          // markers: true, // 위치 확인 필요하면 잠깐 켜서 확인
        },
      });

      gsap.from(".about-txt__desc", {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // about__item 세 개는 살짝 딜레이 주면서 순차적으로
      gsap.from(".about__item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about__box",
          start: "top 80%",
        },
      });

      // "Hello." 글자별 웨이브(꿀렁꿀렁) 애니메이션
      // 화면에 들어오면 글자 하나씩 시간차를 두고 위아래로 무한 반복
      const chars = titleRef.current?.querySelectorAll(".about-hello__char");
      if (chars?.length) {
        gsap.to(chars, {
          y: -12,
          duration: 0.5,
          ease: "sine.inOut",
          stagger: {
            each: 0.06,
            repeat: -1,
            yoyo: true,
          },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play pause resume pause",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="about section" ref={sectionRef}>
        <div className="inner">
          <h2 className="main-title">About Me</h2>
          <div className="about-txt">
            <div className="about-txt__title" ref={titleRef}>
              <h2 className="about-hello">
                {HELLO_TEXT.split("").map((char, i) => (
                  <span key={i} className="about-hello__char">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h2>
              <p>
                안녕하세요. 사용자 중심의 웹 경험을 만드는 웹 퍼블리셔 이유빈입니다.
                퍼블리싱뿐만 아니라 기획과 디자인 경험을 바탕으로, 의도를 정확히
                구현하면서도 유지보수가 쉬운 UI를 만드는 것을 강점으로 합니다.
                사용자에게 더 나은 경험을 전하기 위해 작은 디테일까지 세심하게
                다듬으며, 새로운 기술과 트렌드도 꾸준히 익히고 있습니다.
                함께 고민하고 함께 성장하며, 책임감 있게 완성도 높은 서비스를
                만들어가는 퍼블리셔가 되겠습니다.
              </p>
            </div>

            <div className="about-txt__desc">
              <div className="about__box career">
                <div className="about__item itm">
                  <span>(01)</span>
                  <h3 className="about__item-title">WORK EXPERIENCE</h3>
                  <ul className="about__txt">
                    <li>2026.02 - 재직중 (주)동연에스엔티</li>
                    <li>2022.04 - 2025.05 (주)이타즈</li>
                    <li>2019.12 - 2022.04 (주)록스</li>
                  </ul>
                </div>

                <div className="about__item itm">
                  <span>(02)</span>
                  <h3 className="about__item-title">CERTIFICATES</h3>
                  <ul className="about__txt">
                    <li>정보처리기사</li>
                    <li>2종 보통 운전면허</li>
                  </ul>
                </div>

                <div className="about__item itm">
                  <span>(03)</span>
                  <h3 className="about__item-title">EDUCATION</h3>
                  <ul className="about__txt">
                    <li>
                      2025.07 - 2026.02 AI&빅데이터 분석 활용 풀스택 서비스 개발 수료 -
                      부산IT교육센터
                    </li>
                    <li>
                      2018.07 - 2018.11 스마트기기 UX/UI디자인(디지털디자인) 수료 -
                      그린컴퓨터아카데미
                    </li>
                    <li>2013.03 - 2017.08 경성대학교 컴퓨터공학과 졸업</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}