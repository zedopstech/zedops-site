export default function KnowledgePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="bg-custombg">{children}</main>;
}
