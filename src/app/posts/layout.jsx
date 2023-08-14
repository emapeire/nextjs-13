import { Views } from "./Views";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Here are the posts...</h1>
        <div>
          <Views />
        </div>
      </header>
      <main>{children}</main>
      <footer>© 2023</footer>
    </>
  );
}
