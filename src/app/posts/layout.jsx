import { Counter } from "./Counter";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>Here are the posts...</h1>
        <div>
          <Counter />
        </div>
      </header>
      <main>{children}</main>
      <footer>© 2023</footer>
    </div>
  );
}
