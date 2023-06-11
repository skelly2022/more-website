import { redirect } from "next/navigation";
import getCurrentUser from "../actions/getCurrentUser";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  // console.log(session);
  if (session == null) {
    return redirect("/");
  } else {
    return (
      // <html lang="en">
      <section className="font-inter antialiased bg-gray-900 text-gray-200 tracking-tight">
        {children}
      </section>
    );
  }
}