import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {firstName: "Swetanshu", lastName: "Singh"};

  return (
    <main className="h-screen w-full flex font-inter">
      <Sidebar user={loggedIn} />
      {children}
    </main>
  );
}
