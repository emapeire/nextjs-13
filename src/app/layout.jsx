import "../styles/globals.css";
import { Navigation } from "../components/Navigation";

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <title>My App with Nextjs 13</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
