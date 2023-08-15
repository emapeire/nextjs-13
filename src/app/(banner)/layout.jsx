export default function Layout({ children }) {
  return (
    <div>
      <marquee className="text-black bg-white">This is a banner</marquee>
      {children}
    </div>
  );
}
