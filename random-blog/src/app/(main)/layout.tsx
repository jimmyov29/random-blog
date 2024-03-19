import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex flex-col h-screen bg-neutral-200">
      <Header />
      <main className="w-full h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth">
        {children}
        {/* <Footer /> */}
      </main>
    </div>
  );
}
