const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-slate-50">
      {children}
    </div>
  );
};

export default ClerkLayout;
