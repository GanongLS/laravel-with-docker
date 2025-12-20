import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';

function AdminBlogCreate() {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    content: '',
    status: 'draft',
  });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    post('/admin/blog');
  }

  return (
    <>
      <Head title="Create Blog Post" />

      <div className="max-w-3xl space-y-6">
        <h1 className="text-2xl font-semibold">Create Blog Post</h1>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Title</label>
            <input
              className="mt-1 w-full rounded-md border px-3 py-2"
              value={data.title}
              onChange={(e) => setData('title', e.target.value)}
            />
            {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Content</label>
            <textarea
              rows={8}
              className="mt-1 w-full rounded-md border px-3 py-2"
              value={data.content}
              onChange={(e) => setData('content', e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Status</label>
            <select
              className="mt-1 rounded-md border px-3 py-2"
              value={data.status}
              onChange={(e) => setData('status', e.target.value)}
            >
              <option value="draft">Draft</option>
              <option value="publish">Publish</option>
            </select>
          </div>

          <div className="flex gap-2">
            <button disabled={processing} className="rounded-md bg-primary px-4 py-2 text-white">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

AdminBlogCreate.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;

export default AdminBlogCreate;
