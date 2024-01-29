import Navbar from "./_components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="relative h-full pt-40 dark:bg-[#1F1F1F]">
        <div className="absolute inset-0 h-full w-full bg-transparent bg-[radial-gradient(#000000_1px,transparent_1px)] opacity-10 [background-size:16px_16px] dark:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]"></div>
        {children}
      </main>
    </div>
  );
};

export default MarketingLayout;
