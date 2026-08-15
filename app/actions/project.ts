'use server';

import { sql } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export interface TagInput {
  name: string;
  color_code?: string;
}

export interface CreateProjectInput {
  username: string;
  title: string;
  description: string;
  project_url: string;
  github_url?: string;
  tags: TagInput[];
}

export async function createProject(data: CreateProjectInput) {
  try {
    const userResult = await sql`
      SELECT id FROM users WHERE username = ${data.username} LIMIT 1;
    `;

    if (userResult.length === 0) {
      return { success: false, error: 'User not found in database.' };
    }

    const userId = userResult[0].id;

    const projectResult = await sql`
      INSERT INTO projects (user_id, title, description, project_url, github_url)
      VALUES (${userId}, ${data.title}, ${data.description}, ${data.project_url}, ${data.github_url || null})
      RETURNING id;
    `;

    const projectId = projectResult[0].id;

    if (data.tags && data.tags.length > 0) {
      for (const tag of data.tags) {
        await sql`
          INSERT INTO tags (project_id, name, color_code)
          VALUES (${projectId}, ${tag.name}, ${tag.color_code || '#3B82F6'});
        `;
      }
    }

    revalidatePath(`/${data.username}`);

    return { success: true, message: 'Project successfully created!' };
  } catch (error) {
    console.error('Database Insertion Error:', error);
    return { success: false, error: 'Failed to insert project into database.' };
  }
}

export async function deleteProject(projectId: number, username: string) {
  try {
    await sql`
      DELETE FROM projects
      WHERE id = ${projectId};
    `;

    revalidatePath(`/${username}`);

    return { success: true, message: 'Project deleted successfully' };
  } catch (error) {
    console.error('Error deleting project:', error);
    return { success: false, error: 'Failed to delete project' };
  }
}