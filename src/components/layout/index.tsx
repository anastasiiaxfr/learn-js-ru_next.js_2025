import Header from "./TheHeader";
import Footer from "./TheFooter";

function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="page">
        <Header />
        <main className="container">{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
