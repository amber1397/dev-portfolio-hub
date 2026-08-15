import { getProjectsByUsername } from '@/lib/data';

export const dynamic = 'force-dynamic';
export default async function UserProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const resolvedParams = await params;
  const username = resolvedParams.username;

  const projects = await getProjectsByUsername(username);

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-12 px-4">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <div className="w-20 h-20 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold uppercase shadow-lg">
            {username ? username.slice(0, 2) : '??'}
          </div>
          <h1 className="text-2xl font-bold">@{username}</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Developer Portfolio & Project Showcase Hub
          </p>
        </div>

        <div className="space-y-4">
          {projects.length === 0 ? (
            <p className="text-center text-zinc-500 py-8">No projects found for this user.</p>
          ) : (
            projects.map((project) => (
              <div
                key={project.project_id}
                className="p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200"
              >
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg font-semibold">{project.title}</h2>
                  <div className="flex gap-3 text-xs font-medium">
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition"
                      >
                        GitHub ↗
                      </a>
                    )}
                    <a
                      href={project.project_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Live Demo ↗
                    </a>
                  </div>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.id}
                      style={{
                        backgroundColor: `${tag.color}15`,
                        color: tag.color,
                        borderColor: `${tag.color}30`,
                      }}
                      className="text-[11px] px-2.5 py-0.5 rounded-full border font-medium"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}