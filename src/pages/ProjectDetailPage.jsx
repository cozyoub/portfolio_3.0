import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ProjectSubLayout from '../layouts/ProjectSubLayout';
import { projects } from '../constants/project';

const detailContents = {};
const LOADING_DURATION = 500;

function buildLinkInfo(project) {
  const list = [];

  if (project.type) {
    list.push({ label: '프로젝트 구분', value: project.type === 'PERSONAL' ? '개인 프로젝트' : '팀 프로젝트' });
  }
  if (project.period) {
    list.push({ label: '기간', value: project.period });
  }
  if (project.teamSize != null && project.teamSize !== '') {
    list.push({ label: '팀원', value: `${project.teamSize}명` });
  }
  if (project.contribution) {
    list.push({ label: '기여도', value: project.contribution });
  }
  if (project.features) {
    list.push({ label: '주요 기능', value: project.features });
  }
  if (project.techStack) {
    list.push({ label: '주요 기술', value: project.techStack });
  }
  if (project.backendTech) {
    list.push({ label: 'Backend', value: project.backendTech });
  }
  if (project.frontendTech) {
    list.push({ label: 'Frontend', value: project.frontendTech });
  }
  if (project.collaborationTech) {
    list.push({ label: 'Collaboration', value: project.collaborationTech });
  }
  if (project.role) {
    list.push({ label: '주요 역할', value: project.role });
  }
  if (project.responsibilities?.length) {
    list.push({ label: '담당 업무', value: project.responsibilities });
  }
  if (project.githubUrlBackend) {
    list.push({ label: 'Frontend (GitHub)', href: project.githubUrl });
    list.push({ label: 'Backend (GitHub)', href: project.githubUrlBackend });
  } else if (project.githubUrl) {
    list.push({ label: '깃허브', href: project.githubUrl });
  }
  if (project.deployUrl) {
    list.push({ label: 'URL', href: project.deployUrl, value: '배포 URL' });
  }
  if (project.notionUrl) {
    list.push({ label: '노션 URL', href: project.notionUrl, value: 'Notion에서 보기' });
  }

  return list;
}

function buildRecords(project) {
  if (!project.records || !Array.isArray(project.records)) return [];
  return project.records.map((r) =>
    typeof r === 'string' ? { text: r, href: '#' } : { text: r.text, href: r.href }
  );
}

function ProjectDetailPage() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const project = projects.find((p) => p.slug === slug);
  const content = slug ? detailContents[slug] : null;

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), LOADING_DURATION);
    return () => clearTimeout(timer);
  }, [slug]);

  if (loading) {
    return (
      <div className="wrap">
        <Header />
        <div className="project-detail-loading">
          <div className="project-detail-loading__spinner" aria-hidden />
          <p className="project-detail-loading__text">로딩 중...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="wrap">
        <Header />
        <main className="project-sub__main">
          <div className="project-sub__inner">
            <p>프로젝트를 찾을 수 없습니다.</p>
          </div>
        </main>
      </div>
    );
  }

  const description = project.detailDescription ?? content?.description ?? project.shortDescription;
  const linkInfo = buildLinkInfo(project);

  return (
    <div className="wrap">
      <ProjectSubLayout
        title={project.title}
        description={description}
        linkInfo={linkInfo}
      />
    </div>
  );
}

export default ProjectDetailPage;