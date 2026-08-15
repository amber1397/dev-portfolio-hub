'use client';

import { useState } from 'react';
import { createProject, TagInput } from '@/app/actions/project';

export default function AddProjectForm({ username }: { username: string }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [projectUrl, setProjectUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  
  const [tagName, setTagName] = useState('');
  const [tagColor, setTagColor] = useState('#3B82F6');
  const [tags, setTags] = useState<TagInput[]>([]);
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleAddTag = () => {
    if (!tagName.trim()) return;
    setTags([...tags, { name: tagName.trim(), color_code: tagColor }]);
    setTagName('');
  };

  const handleRemoveTag = (indexToRemove: number) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const response = await createProject({
      username,
      title,
      description,
      project_url: projectUrl,
      github_url: githubUrl,
      tags,
    });

    setLoading(false);

    if (response.success) {
      setMessage('Project created successfully!');
      setTitle('');
      setDescription('');
      setProjectUrl('');
      setGithubUrl('');
      setTags([]);
    } else {
      setMessage(response.error || 'Something went wrong.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow border border-zinc-200 dark:border-zinc-800 space-y-4">
      <h2 className="text-xl font-bold mb-4">Add New Project</h2>

      {message && (
        <div className="p-3 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 rounded-lg text-sm">
          {message}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-1">Project Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. E-Commerce Platform"
          className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Short description of the project"
          className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Project Link</label>
          <input
            type="url"
            required
            value={projectUrl}
            onChange={(e) => setProjectUrl(e.target.value)}
            placeholder="https://..."
            className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">GitHub Link (Optional)</label>
          <input
            type="url"
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            placeholder="https://github.com/..."
            className="w-full px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Tech Stack Tags</label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={tagName}
            onChange={(e) => setTagName(e.target.value)}
            placeholder="Tag Name (e.g. Next.js)"
            className="flex-1 px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="color"
            value={tagColor}
            onChange={(e) => setTagColor(e.target.value)}
            className="w-10 h-10 p-1 border rounded-lg cursor-pointer dark:bg-zinc-800 dark:border-zinc-700"
          />
          <button
            type="button"
            onClick={handleAddTag}
            className="px-4 py-2 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 rounded-lg font-medium text-sm transition"
          >
            Add Tag
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              style={{ backgroundColor: `${tag.color_code}20`, color: tag.color_code }}
              className="text-xs px-2.5 py-1 rounded-full font-medium flex items-center gap-1 border"
            >
              {tag.name}
              <button
                type="button"
                onClick={() => handleRemoveTag(index)}
                className="hover:text-red-500 font-bold ml-1"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition disabled:opacity-50"
      >
        {loading ? 'Saving Project...' : 'Save Project'}
      </button>
    </form>
  );
}