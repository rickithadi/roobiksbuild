import PageHeader from "../components/PageHeader";
import Projects from "../sections/Projects";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader eyebrow="Our Work" title="Recent Fencing Projects" crumb="Projects" />
      <Projects full />
    </>
  );
}
