import { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import {
  projects,
  FILTER_ALL,
  PROJECT_TYPES,
  PROJECT_TECHS,
} from "../constants/project";

gsap.registerPlugin(ScrollTrigger);

function ProjectPage() {
  const [selectedType, setSelectedType] = useState(FILTER_ALL);
  const [selectedTech, setSelectedTech] = useState(FILTER_ALL);
  const gridRef = useRef(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchType = selectedType === FILTER_ALL || p.type === selectedType;
      const matchTech =
        selectedTech === FILTER_ALL ||
        (Array.isArray(p.tech)
          ? p.tech.includes(selectedTech)
          : p.tech === selectedTech);
      return matchType && matchTech;
    });
  }, [selectedType, selectedTech]);

  const isFiltered = selectedType !== FILTER_ALL || selectedTech !== FILTER_ALL;

  const resetFilters = () => {
    setSelectedType(FILTER_ALL);
    setSelectedTech(FILTER_ALL);
  };

useEffect(() => {
  let ctx = gsap.context(() => {
    gsap.from(".project-page__card", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
      clearProps: "transform", // 애니메이션 끝나면 transform 인라인 스타일 제거
      scrollTrigger: {
        trigger: ".project-page__grid",
        start: "top 85%",
      },
    });
  }, gridRef);

  return () => {
    // 클린업 시 혹시 진행 중인 트윈이 있으면 강제로 완료 상태로 리셋
    gsap.set(".project-page__card", { clearProps: "all" });
    ctx.revert();
  };
}, [filteredProjects]);

  return (
    <div className="wrap project-page">
      <main className="project-page__main">
        <div className="inner" ref={gridRef}>
          <h1 className="project-page__title">
            MY PROJECT
            <span className="project-page__title-icon" aria-hidden></span>
          </h1>
          <p className="project-page__desc">
            React, Flutter, Spring boot로 다양한 웹 / 앱을 개발한 프로젝트입니다.
          </p>

          {/* 필터: 프로젝트 유형 */}
          <div className="project-page__filter-row type">
            <span className="project-page__filter-label">유형</span>
            <div className="project-page__filter-group">
              <label key={FILTER_ALL} className="project-page__filter-item">
                <input
                  type="radio"
                  name="projectType"
                  value={FILTER_ALL}
                  checked={selectedType === FILTER_ALL}
                  onChange={() => setSelectedType(FILTER_ALL)}
                  className="sr-only"
                />
                <span className="project-page__filter-text">전체</span>
                <span
                  className={`project-page__filter-indicator ${selectedType === FILTER_ALL ? "is-active" : ""}`}
                  aria-hidden
                />
              </label>
              {PROJECT_TYPES.map((type) => (
                <label key={type} className="project-page__filter-item">
                  <input
                    type="radio"
                    name="projectType"
                    value={type}
                    checked={selectedType === type}
                    onChange={() => setSelectedType(type)}
                    className="sr-only"
                  />
                  <span className="project-page__filter-text">{type}</span>
                  <span
                    className={`project-page__filter-indicator ${selectedType === type ? "is-active" : ""}`}
                    aria-hidden
                  />
                </label>
              ))}
            </div>
          </div>

          {/* 필터: 기술 스택 */}
          <div className="project-page__filter-row stack">
            <span className="project-page__filter-label">기술</span>
            <div className="project-page__filter-tags">
              <button
                type="button"
                className={`project-page__filter-tag ${selectedTech === FILTER_ALL ? "is-active" : ""}`}
                onClick={() => setSelectedTech(FILTER_ALL)}
              >
                전체
              </button>
              {PROJECT_TECHS.map((tech) => (
                <button
                  key={tech}
                  type="button"
                  className={`project-page__filter-tag ${selectedTech === tech ? "is-active" : ""}`}
                  onClick={() => setSelectedTech(tech)}
                >
                  {tech}
                </button>
              ))}

              {isFiltered && (
                <button
                  type="button"
                  className="project-page__filter-reset"
                  onClick={resetFilters}
                >
                  필터 초기화 ✕
                </button>
              )}
            </div>
          </div>

          {/* 결과 개수 */}
          <p className="project-page__result-count">
            총 <strong>{filteredProjects.length}</strong>개 프로젝트
          </p>

          {/* 프로젝트 카드 그리드 */}
          <section className="project-page__grid">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/project/${project.slug}`}
                  className="project-page__card"
                >
                  <div className="project-page__card-img-box">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-page__card-img"
                      />
                    )}
                    {project.type && (
                      <span className="project-page__card-type">
                        {project.type === "PERSONAL" ? "개인" : "팀"}
                      </span>
                    )}
                  </div>

                  <div className="project-page__card-text">
                    <h3 className="project-page__card-title">
                      {project.title}
                    </h3>
                    <p className="project-page__card-desc">
                      {project.shortDescription}
                    </p>

                    {project.tech?.length > 0 && (
                      <div className="project-page__card-tags">
                        {(Array.isArray(project.tech)
                          ? project.tech
                          : [project.tech]
                        ).map((t, i) => (
                          <span key={i} className="project-page__card-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))
            ) : (
              <p className="project-page__empty">
                선택한 조건에 맞는 프로젝트가 없습니다.
              </p>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default ProjectPage;