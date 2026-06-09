import { BackToTop } from "./components/back-to-top";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { ParticlesBackground } from "./components/particles.background";

interface IProps {
  name: string;
  position: string;
  children: React.ReactNode;
}

export const Layout: React.FC<IProps> = (props) => {
  const { children, name, position } = props;
  return (
    <>
      <Header name={name} />
      <ParticlesBackground />
      <BackToTop />
      <main className="pt-24 pb-16 px-4">{children}</main>
      <Footer name={name} position={position} />
    </>
  );
};
