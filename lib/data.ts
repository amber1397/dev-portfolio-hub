import { getSql } from './db'; 

export interface Tag {
  id: number;
  name: string;
  color: string;
}

export interface Project {
  project_id: number;
  title: string;
  description: string;
  project_url: string;
  github_url?: string;
  tags: Tag[];
}

export async function getProjectsByUsername(username: string): Promise<Project[]> {
  const sql = getSql();
  const data = await sql`
    SELECT 
      p.id AS project_id,
      p.title,
      p.description,
      p.project_url,
      p.github_url,
      p.display_order,
      COALESCE(
        JSON_AGG(
          JSON_BUILD_OBJECT('id', t.id, 'name', t.name, 'color', t.color_code)
        ) FILTER (WHERE t.id IS NOT NULL), '[]'
      ) AS tags
    FROM projects p
    JOIN users u ON p.user_id = u.id
    LEFT JOIN tags t ON p.id = t.project_id
    WHERE u.username = ${username}
    GROUP BY p.id
    ORDER BY p.display_order ASC, p.created_at DESC;
  `;

  return data as Project[];
}