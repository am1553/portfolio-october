import Lines from "../components/Lines";
import Header from "../components/Header";
import Footer from "../components/Footer";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <Lines />
      <Header />
      <div className="flex flex-col  max-w-screen-2xl xl:mx-auto gap-24 lg:gap-40 relative h-fit">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
