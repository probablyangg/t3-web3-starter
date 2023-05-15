import { Navbar } from "~/src/components/Navbar";
// import Footer from "~/src/components/Footer";
import type { ReactNode } from "react";


const Main = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden selection:bg-highlight selection:text-primary bg-white">
      <Navbar />
      <div
        className={`
          my-12
          flex-1
          sm:my-24
          mx-auto
          ${className ?? ""}
      `}
      >
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
