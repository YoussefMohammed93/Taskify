import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

const MarktingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="pt-40 pb-20">{children}</main>
      <Footer />
    </div>
  );
};

export default MarktingLayout;
