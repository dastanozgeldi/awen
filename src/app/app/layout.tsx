import { auth } from "@/auth";
import { ProfileButton } from "@/components/profile-button";
import { Sidebar } from "@/components/sidebar";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <div className="grid grid-cols-[320px_1fr]">
      <Sidebar playlists={["beatles", "i dont give a f", "spit in my face"]} />
      <div>
        <header className="p-4 border-b">
          <ProfileButton user={session?.user} />
        </header>
        <div className="m-6">{children}</div>
      </div>
    </div>
  );
}
