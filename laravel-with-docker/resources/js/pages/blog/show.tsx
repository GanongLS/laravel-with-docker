import PublicLayout from '@/layouts/public-layout';
import { Head, Link } from '@inertiajs/react';

type Props = {
  post: {
    title: string;
    content: string | null;
  };
};

export default function BlogShow({ post }: Props) {
  return (
    <>
      <Head title={post.title.replace('-', ' ')} />

      <article className="blog-article">
        <Link href="/blog" className="blog-back">
          ← Back to blog
        </Link>

        <div style={{ padding: '2rem' }}>
          <h1>{post.title}</h1>
          <div style={{ marginTop: '1rem', whiteSpace: 'pre-line' }}>{post.content}</div>
        </div>
      </article>
    </>
  );
}

BlogShow.layout = (page: React.ReactNode) => <PublicLayout>{page}</PublicLayout>;
