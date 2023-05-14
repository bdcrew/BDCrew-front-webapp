import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ContentLayout from "./ContentLayout";
import Navigation from "../Navigation";

interface P extends PropsWithChildren {}

const Layout: React.FC<P> = ({ children }) => {
  return (
    <main className="w-screen h-screen flex flex-col justify-between">
      <Header />
      <section className="md:flex md:relative h-full">
        <Navigation />
        <ContentLayout>{children}</ContentLayout>
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
