import Section from "@/components/Section";

export default function CardGrid({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Section>
      <div className="gap-4 grid grid-cols-2">{children}</div>
    </Section>
  );
}
