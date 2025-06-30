export default function Section({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-16 bg-white/75 p-4 md:p-16 w-full max-w-4xl">
        {children}
      </div>
    </div>
  );
}
