export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en">
    <section className="font-inter antialiased bg-gray-900 text-gray-200 tracking-tight">
      {children}
    </section>
  );
}
