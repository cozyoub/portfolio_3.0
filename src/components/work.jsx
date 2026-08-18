import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { works } from "../constants/work";
import useScrollSquish from "../hooks/useScrollSquish.jsx";

gsap.registerPlugin(ScrollTrigger);

const WORK_SECTION_ITEMS = [
  { slug: "dongyeon-snt", description: "Web | 디자인 · 퍼블리싱 · 기획" },
  { slug: "bnue-publishing", description: "Web | 디자인 · 퍼블리싱 · 기획" },
  { slug: "gimhae-culture", description: "Web | 디자인 · 퍼블리싱 · 기획" },
  { slug: "savings-bank-nft", description: "App | 디자인 · 퍼블리싱 · 기획" },
  { slug: "delta-t", description: "Web | 디자인 · 퍼블리싱 · 기획" },
  { slug: "hoseo-theatre", description: "Web | 디자인 · 퍼블리싱 · 기획" },
];

export default function Work() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const worksBySlug = Object.fromEntries(works.map((w) => [w.slug, w]));

  // padding은 li(.work__list-item) 자체가 아니라 안쪽 .work__txt(padding: 50px 20px)에 있음
  useScrollSquish(sectionRef, ".work__list-item .work__txt", { amount: 20 });


  const projects = WORK_SECTION_ITEMS.map(({ slug, description }) => {
    const w = worksBySlug[slug];
    if (!w) return null;

    return {
      id: w.slug,
      title: w.title,
      shortDescription: w.shortDescription,
      description,
      image: w.image,
      solutionTag: w.solutionTag,
      scopeTags: w.scopeTags,
      contributionPercent: w.contributionPercent,
      urlBtn: w.deployUrl || null,
      moreBtn: `/work/${w.slug}`,
      webmark: w.webmark,
      contribution: w.contribution,
    };
  }).filter(Boolean);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".work__list-item", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".work__list",
          start: "top 80%",
        },
      });

      // 이미지가 스크롤로 화면에 닿으면(진입하면) 살짝 확대되고,
      // 화면을 완전히 벗어나면 다시 원래 크기로 (toggleClass가 자동으로 on/off)
      const imgBoxes = gsap.utils.toArray(".work__list-item .img", sectionRef.current);
      imgBoxes.forEach((box) => {
        ScrollTrigger.create({
          trigger: box,
          start: "top 85%",
          toggleClass: { targets: box, className: "is-zoomed" },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="work section" ref={sectionRef}>
      <div className="inner">
        <h2 className="main-title">work (~2026)</h2>

        <ul className="work__list">
          {projects.map((project) => (
            <li
              key={project.id}
              className="work__list-item"
              onClick={() => navigate(project.moreBtn)}
            >
              <div className="img">
                <img
                  src={project.image}
                  alt={project.title}
                  className="thumnail"
                />
                {project.webmark && (
                  <img
                    src="/images/web-mark.png"
                    alt="Web"
                    className="work-card-webmark"
                  />
                )}
              </div>

              <div className="work__txt">
                <h5>{project.title}</h5>

                {project.solutionTag?.length > 0 && (
                  <div className="work-txt-row">
                    <div className="work-tag-group">
                      {project.solutionTag.map((tag, i) => (
                        <span key={i} className="work-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p>{project.contribution}</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}