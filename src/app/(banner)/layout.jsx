export default function Layout({ children }) {
  return (
    <>
      <marquee className="text-black bg-white">This is a banner</marquee>
      {children}
    </>
  );
}
