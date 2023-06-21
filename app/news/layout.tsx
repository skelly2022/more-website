import getCurrentUser from "../actions/getCurrentUser";
import ChatWidget from "../components/ChatWidget";
import ClientOnly from "../components/ClientOnly";
import Footer from "../components/footer/footer";
import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import Navbar from "../components/navbar/Navbar";
import ToasterProvider from "../providers/ToasterProvider";

export default async function AosWrap({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <>
      <ClientOnly>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
      </ClientOnly>
      {/* <PageIllustration /> */}
      {children}
      {/* <Footer /> */}
      {/* <Footer /> */}
    </>
  );
}
