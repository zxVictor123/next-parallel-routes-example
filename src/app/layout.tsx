import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
  team,
  analytics,
}: Readonly<{
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="absolute top-10 text-blue-400 flex gap-30 pb-24 ">
            <Link href="/">home</Link>
            <Link href="/visitor">visitor</Link>
          </div>
          <div className="flex flex-col gap-12 text-white">
            <div className="flex gap-12">
              {team}
              {analytics}
            </div>
            <div>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
