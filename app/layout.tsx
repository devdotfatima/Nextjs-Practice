import "./globals.css";
import Header from "./components/Header";
import Providers from "./components/Providers";
import getCurrentUser from "./actions/getCurrentUser";
export const metadata = {
  title: "First Next App",
  description: "Generated by create next app",
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className="min-h-full bg-slate-50 dark:bg-slate-700 dark:text-white ">
        <Providers>
          <Header currentUser={currentUser} />
          <main className="min-h-full">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
