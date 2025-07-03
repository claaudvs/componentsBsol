import { Sidebar } from "../components";
import Footer from "../components/ui/Footer/Footer";

export default function HomeLayout({children}: {children: React.ReactNode;}) {
  return (
    <>
      <div className="h-06">
        <Sidebar />
        <div className="p-8 sm:ml-64 h-screen">
          {children}
        </div>
x``      </div>
      <Footer />
    </>
  );
}
