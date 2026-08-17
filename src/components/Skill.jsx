import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillData = [
  {
    id: "web-design",
    title: "WEB DESIGN",
    image: "/images/skill-web-design.jpg",
  },
  {
    id: "ui-ux",
    title: "UI/UX",
    image: "/images/skill-ui-ux.jpg",
  },
  {
    id: "web-publishing",
    title: "WEB PUBLISHING",
    image: "/images/skill-web-publishing.jpg",
  },
  {
    id: "frontend",
    title: "FRONTEND",
    image: "/images/skill-web-front.jpg",
  },
];

export default function Skill() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [autoIndex, setAutoIndex] = useState(0); // 자동 순환 인덱스
  const sectionRef = useRef(null);

  // 마우스가 올라가 있으면 hover 우선, 아니면 자동 순환 값 사용
  const activeIndex = hoverIndex !== null ? hoverIndex : autoIndex;

  // 3초마다 자동으로 다음 항목 활성화 (hover 중일 땐 멈춤)
  useEffect(() => {
    if (hoverIndex !== null) return; // 마우스 올라가 있으면 자동 순환 멈춤

    const interval = setInterval(() => {
      setAutoIndex((prev) => (prev + 1) % skillData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hoverIndex]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".skill-list__item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="skill section" ref={sectionRef}>
      <div className="inner">
        <h2 className="main-title">What I can help with you</h2>

        <ul className="skill-list">
          {skillData.map((item, index) => (
            <li
              key={item.id}
              className={`skill-list__item ${
                activeIndex === index ? "is-active" : ""
              }`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <p>{item.title}</p>

              <span className="skill-list__image">
                <img src={item.image} alt={item.title} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}