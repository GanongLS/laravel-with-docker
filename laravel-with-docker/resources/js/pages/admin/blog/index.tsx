import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';

type Post = {
  id: number;
  title: string;
  slug: string;
  status: string;
  created_at: string;
};

function AdminBlogIndex({ posts }: { posts: Post[] }) {
  return (
    <>
      <Head title="Admin Blog" />

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Blog Posts</h1>

          <Link href="/admin/blog/create" className="rounded-md bg-primary px-4 py-2 text-white">
            New Post
          </Link>
        </div>

        <div className="rounded-lg border">
          <table className="w-full text-sm">
            <thead className="border-b bg-muted">
              <tr>
                <th className="px-4 py-2 text-left">Title</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b">
                  <td className="px-4 py-2">{post.title}</td>
                  <td className="capitalize">{post.status}</td>
                  <td>
                    <Link href={`/admin/blog/${post.id}/edit`} className="text-primary">
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

AdminBlogIndex.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;

export default AdminBlogIndex;
