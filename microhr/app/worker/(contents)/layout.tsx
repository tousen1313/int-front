import { Navbar } from "@/features/common/components/NavBar/Navbar";

export default function WorkerRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
