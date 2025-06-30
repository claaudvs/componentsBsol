import { Sidebar } from "../components";

export default function HomeLayout({children}: {children: React.ReactNode;}) {
  return (
    <>
      <Sidebar />
      <div className="p-8 sm:ml-64 h-screen">
        {children}
      </div>
    </>
  );
}
