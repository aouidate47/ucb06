import "./globals.css";

export const metadata = {
  title: "CRAZYBOYS 2006 — UCB06",
  description: "The official digital home of Crazyboys 2006. History, culture, media and the voice of the curva.",
  metadataBase: new URL("https://ucb06.com"),
  openGraph: {
    title: "CRAZYBOYS 2006 — UCB06",
    description: "La jeunesse est une force. Depuis 2006.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
