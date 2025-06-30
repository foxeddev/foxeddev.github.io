import Section from "@/components/Section";

export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <header className="flex flex-col justify-end min-h-screen">
      <Section>{children}</Section>
    </header>
  );
}
