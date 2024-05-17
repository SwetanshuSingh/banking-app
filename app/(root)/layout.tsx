export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" font-inter">
      SIDEBAR
      {children}
    </main>
  );
}
