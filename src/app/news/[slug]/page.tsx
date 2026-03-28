export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-display font-bold text-primary">News Article</h1>
      <p className="mt-4 text-lg">Full article content for: {slug}</p>
    </div>
  );
}
