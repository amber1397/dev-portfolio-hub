'use client';

import { useState } from 'react';
import { deleteProject } from '@/app/actions/project';
import { Project } from '@/lib/data';

export default function ProjectList({
  projects,
  username,
}: {
  projects: Project[];
  username: string;
}) {
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const handleDelete = async (projectId: number) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    setDeletingId(projectId);
    await deleteProject(projectId, username);
    setDeletingId(null);
  };

  return (
    <div className="space-y-3 mt-8">
      <h3 className="text-lg font-bold">Existing Projects</h3>
      {projects.length === 0 ? (
        <p className="text-sm text-zinc-500">No projects added yet.</p>
      ) : (
        projects.map((project) => (
          <div
            key={project.project_id}
            className="flex justify-between items-center p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl"
          >
            <div>
              <h4 className="font-semibold text-sm">{project.title}</h4>
              <p className="text-xs text-zinc-500 truncate max-w-xs">{project.project_url}</p>
            </div>
            <button
              onClick={() => handleDelete(project.project_id)}
              disabled={deletingId === project.project_id}
              className="px-3 py-1.5 text-xs font-medium text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 dark:bg-red-950/40 dark:hover:bg-red-950 rounded-lg transition disabled:opacity-50"
            >
              {deletingId === project.project_id ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        ))
      )}
    </div>
  );
}