import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'parallel-routes'
}
export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-screen h-screen flex justify-center items-center">
          <AntdRegistry>
            {children}
            {modal}
          </AntdRegistry>
        </div>
      </body>
    </html>
  );
}
