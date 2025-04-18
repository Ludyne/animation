import "./globals.css";

export const metadata = {
  title: "Animation Cards",
  description: "Generated animation cards",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://db.onlinewebfonts.com/c/81c9cfcec66a1bb46e90e184f4d04641?family=Aeonik+Pro+Medium"
          rel="stylesheet"
        ></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
