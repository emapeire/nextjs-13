import "../styles/globals.css";
import { Navigation } from "../components/Navigation";
import { font } from "./font";

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <title>My App with Nextjs 13</title>
      </head>
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
