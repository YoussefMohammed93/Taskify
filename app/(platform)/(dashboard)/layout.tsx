import Navbar from "./_components/navbar";

const DashboradLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default DashboradLayout;
