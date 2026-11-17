import "./globals.css";

export const metadata = {
  title: "Crazy Boys 2006 — UCB06",
  description: "The official digital home of Crazyboys 2006. History, culture, media and the voice of the curva.",
  metadataBase: new URL("https://ucb06.com"),
  openGraph: {
    title: "Crazy Boys 2006 — UCB06",
    description: "La jeunesse est une force. Depuis 2006.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
