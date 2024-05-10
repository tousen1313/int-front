import { Navbar } from "@/features/common/components/NavBar/Navbar";

export default function CompanyRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
    </>
  );
}
