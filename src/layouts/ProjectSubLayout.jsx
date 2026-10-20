import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * 프로젝트/작업 상세(서브) 페이지 공통 레이아웃
 * - 뒤로가기 버튼, 제목, 설명 블록, 강조 버튼(cta), 디자인 시안(gallery),
 *   주요 정보 및 링크 정보(dl), 시연 영상 목록, 발표자료, 관련 기록(초록 버튼)
 */

// 시안 한 장 — lightSrc가 있으면 Dark / Light 전환
function GalleryItem({ item }) {
  const [theme, setTheme] = useState('dark');
  const src = theme === 'light' && item.lightSrc ? item.lightSrc : item.src;

  return (
    <figure className="project-sub__gallery-item">
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="project-sub__gallery-img"
        aria-label={`${item.title} 시안 크게 보기`}
      >
        <img src={src} alt={`${item.title} 시안`} loading="lazy" />
      </a>
      <figcaption className="project-sub__gallery-caption">
        <span>{item.title}</span>
        {item.lightSrc && (
          <span className="project-sub__gallery-toggle" role="group" aria-label="테마">
            {['dark', 'light'].map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={theme === t}
                onClick={() => setTheme(t)}
              >
                {t === 'dark' ? 'Dark' : 'Light'}
              </button>
            ))}
          </span>
        )}
      </figcaption>
    </figure>
  );
}

// 실제 링크로 쓸 수 있는지 체크
// - http(s):// 외부 URL이거나
// - '/'로 시작하는 로컬 절대경로(public 폴더 기준, 예: /pdf/slowmode.pdf)면 링크 처리
// - 그 외(파일명만 있는 상태 등)는 텍스트로만 표시
const isUrl = (value) => typeof value === 'string' && /^(https?:\/\/|\/)/.test(value);

function ProjectSubLayout({
  title,
  description,
  backTo = '/project',
  backLabel = '목록으로',
  linkInfo = [],
  demos = [],
  presentation,
  records = [],
  cta,
  gallery = [],
}) {
  return (
    <div className="wrap project-sub">
      <main className="project-sub__main">
        <div className="inner">
          <Link
            to={backTo}
            className="project-sub__back"
            aria-label={backLabel}
          >
            <span className="project-sub__back-icon" aria-hidden>
              ←
            </span>
            <span className="project-sub__back-text">{backLabel}</span>
          </Link>

          <h1 className="project-sub__title">{title}</h1>

          <div className="project-sub__desc-block">
            {typeof description === 'string' ? (
              <p className="project-sub__desc-text">{description}</p>
            ) : (
              <div className="project-sub__desc-text">{description}</div>
            )}
          </div>

          {cta?.url && (
            <a
              href={cta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-sub__cta"
            >
              {cta.text}
              <span className="project-sub__cta-arrow" aria-hidden>↗</span>
            </a>
          )}

          {gallery.length > 0 && (
            <section className="project-sub__gallery">
              <h2 className="project-sub__gallery-title">디자인 시안</h2>
              <div className="project-sub__gallery-list">
                {gallery.map((item, i) => (
                  <GalleryItem key={i} item={item} />
                ))}
              </div>
            </section>
          )}

          {linkInfo.length > 0 && (
            <section className="project-sub__info">
              <h2 className="project-sub__info-title">
                주요 정보 및 링크 정보
              </h2>

              <dl className="project-sub__info-list">
                {linkInfo.map((item, i) => (
                  <div key={i} className="project-sub__info-item">
                    <dt className="project-sub__info-dt">{item.label}</dt>

                    <dd className="project-sub__info-dd">
                      {item.links?.length ? (
                        <div className="project-sub__info-links">
                          {item.links.map((link, j) => (
                            <a
                              key={j}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-sub__info-link"
                            >
                              {link.text}
                            </a>
                          ))}
                        </div>
                      ) : item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-sub__info-link"
                        >
                          {item.value ?? '링크'}
                        </a>
                      ) : Array.isArray(item.value) ? (
                        <ul className="project-sub__info-ul">
                          {item.value.map((line, j) => (
                            <li key={j}>{line}</li>
                          ))}
                        </ul>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {demos.length > 0 && (
            <section className="project-sub__demos">
              <h2 className="project-sub__demos-title">주요 기능 시연</h2>

              <ul className="project-sub__demos-list">
                {demos.map((demo, i) => (
                  <li key={i} className="project-sub__demo-item">
                    <span className="project-sub__demo-label">
                      {demo.label}
                    </span>

                    {isUrl(demo.file) ? (
                      <a
                        href={encodeURI(demo.file)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-sub__demo-link"
                      >
                        영상 보기
                      </a>
                    ) : (
                      <span className="project-sub__demo-file">
                        {demo.file}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {presentation && (
            <section className="project-sub__presentation">
              <h2 className="project-sub__presentation-title">
                {presentation.label ?? '발표자료'}
              </h2>

              {isUrl(presentation.file) ? (
                <a
                  href={encodeURI(presentation.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-sub__presentation-link"
                >
                  자료 보기
                </a>
              ) : (
                <span className="project-sub__presentation-file">
                  {presentation.file}
                </span>
              )}
            </section>
          )}

          {records.length > 0 && (
            <section className="project-sub__records">
              <h2 className="project-sub__records-title">
                프로젝트 기록
              </h2>

              <div className="project-sub__records-list">
                {records.map((record, i) => (
                  <a
                    key={i}
                    href={record.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-sub__record-btn"
                  >
                    {record.text}
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default ProjectSubLayout;