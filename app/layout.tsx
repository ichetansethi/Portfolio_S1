import "./global.css";
import LayoutWrapper from "@/components/layout-wrapper";

export const metadata = {
  title: "Chetan Sethi | Portfolio",
  description: "Software Engineer building production-grade systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
