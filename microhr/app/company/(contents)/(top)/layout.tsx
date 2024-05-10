export default function UserRootLayout({
  applicants,
  jobs,
}: Readonly<{
  applicants: React.ReactNode;
  jobs: React.ReactNode;
}>) {
  return (
    <>
      <section>
        <h2 className="text-2xl font-bold mb-5">応募者</h2>
        {applicants}
      </section>
      <section className="mt-10 mb-5">
        <h2 className="text-2xl font-bold mb-5">求人の掲載</h2>
        {jobs}
      </section>
    </>
  );
}
