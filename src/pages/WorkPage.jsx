import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { works } from "../constants/work.jsx";

gsap.registerPlugin(ScrollTrigger);

function WorkPage() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="wrap project-page" ref={sectionRef}>
      <main className="project-page__main">
        <div className="inner">
          <h1 className="project-page__title">
            UI/UX WORK
            <span className="project-page__title-icon" aria-hidden></span>
          </h1>
          <p className="project-page__desc">
            실무에서 진행한 UI/UX 및 퍼블리싱 작업입니다.
          </p>

          <ul className="work__list">
            {works.length > 0 ? (
              works.map((work) => (
                <li
                  key={work.id}
                  className="work__list-item"
                  onClick={() => navigate(`/work/${work.slug}`)}
                >
                  <div className="img">
                    {work.image && (
                      <img
                        src={work.image}
                        alt={work.title}
                        className="thumnail"
                      />
                    )}
                    {work.webmark && (
                      <img
                        src="/images/web-mark.png"
                        alt="Web"
                        className="work-card-webmark"
                      />
                    )}
                  </div>

                  <div className="work__txt">
                    <div>
                      {work.solutionTag?.length > 0 && (
                      <div className="work-txt-row">
                        <div className="work-tag-group tomato">
                          {work.solutionTag.map((tag, i) => (
                            <span key={i} className="work-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                      <h5>{work.title}</h5>
                    </div>
<div>

                    

                    {work.scopeTags?.length > 0 && (
                      <div className="work-txt-row type02">
                        <span>작업범위</span>
                        <div className="work-tag-group">
                          {work.scopeTags.map((s, i) => (
                            <span key={i} className={`work-tag tag-${s.color}`}>
                              {s.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {work.role != null && (
                      <div className="work-txt-row">
                        <span className="work-tag-percent">
                          {work.role}
                        </span>
                      </div>
                    )}
</div>
                  </div>
                </li>
              ))
            ) : (
              <p className="project-page__empty">등록된 작업이 없습니다.</p>
            )}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default WorkPage;