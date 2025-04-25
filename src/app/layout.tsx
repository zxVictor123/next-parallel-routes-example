import "./globals.css";


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
