import ProjectTasklist_ from './page.client';

interface ProjectTasklistProps {
  params: {
    slug: string;
  };
}

export default async function ProjectTasklist({
  params,
}: ProjectTasklistProps) {
  // get project data
  // get all tasks with the given projectId
  // then return it
  const { slug } = await params;
  const splittedSlug = slug.split('-');
  const projectId = Number(splittedSlug[splittedSlug.length - 1]);

  return <ProjectTasklist_ projectId={projectId} />;
}
