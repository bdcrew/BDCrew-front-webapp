import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Navigation from "./Navigation";

interface P extends PropsWithChildren {}

const Layout: React.FC<P> = ({ children }) => {
  return (
    <main className="w-screen h-screen flex flex-col justify-between">
      <Header />
      <section className="flex relative h-full">
        <Navigation />
        <Content>{children}</Content>
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
