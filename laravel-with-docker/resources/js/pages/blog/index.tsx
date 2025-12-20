import PublicLayout from '@/layouts/public-layout';
import { Head, Link } from '@inertiajs/react';

type Post = {
  id: number;
  slug: string;
  title: string;
  created_at: string;
  content: string;
};

type Props = {
  posts: Post[];
};

export default function BlogIndex({ posts }: Props) {
  return (
    <>
      <Head title="Blog" />

      <section className="blog-index">
        <header className="blog-header">
          <h1>Blog</h1>
          <p>Updates, insights, and public releases from Ganin Enterprise.</p>
        </header>

        <div className="blog-list">
          {posts.map((post) => (
            <article key={post.slug} className="blog-card">
              <span className="blog-date">{post.created_at}</span>

              <h2>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p>{post.content.substring(0, 70)}...</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

BlogIndex.layout = (page: React.ReactNode) => <PublicLayout>{page}</PublicLayout>;
