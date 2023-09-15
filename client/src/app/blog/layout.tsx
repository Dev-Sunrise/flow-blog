export const metadata = {
  title: "Blog Lists",
  description: "This it Blog page!",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
