import { redirect } from "next/navigation";
import getCurrentUser from "../actions/getCurrentUser";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import ClientOnly from "../components/ClientOnly";
import Main from "../components/dashboard/home/Main";
import getCurrentLocation from "../actions/getCurrentLocation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  const session = await getServerSession(authOptions);
  if (session == null) {
    return redirect("/");
  } else {
    return (
      // <html lang="en">
      <>
        <link
          rel="stylesheet"
          href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css"
          type="text/css"
        />
        <ClientOnly>
          <Main currentUser={currentUser} />
        </ClientOnly>
        {/* <section className="h-screen overflow-auto pb-36 pt-8 px-2 md:pb-8 md:pt-4 lg:pt-0">
          {children}
        </section> */}
      </>
    );
  }
}
