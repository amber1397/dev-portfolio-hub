export const dynamic = 'force-dynamic';
import AddProjectForm from './AddProjectForm';
import ProjectList from './ProjectList';
import { getProjectsByUsername } from '@/lib/data';

export default async function AdminPage() {
  const username = 'dev_user';
  const projects = await getProjectsByUsername(username);

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-12 px-4">
      <div className="max-w-lg mx-auto space-y-6">
        <AddProjectForm username={username} />
        <ProjectList projects={projects} username={username} />
      </div>
    </main>
  );
}