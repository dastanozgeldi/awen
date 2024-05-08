import { Sidebar } from "@/components/sidebar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[280px_1fr]">
      <Sidebar playlists={["beatles", "i dont give a f", "spit in my face"]} />
      <div className="m-6">{children}</div>
    </div>
  );
}
