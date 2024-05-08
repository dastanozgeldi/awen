import {
  Home,
  Library,
  ListMusic,
  Mic2,
  Music,
  Music2,
  Search,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";

interface Props {
  playlists: any[];
}

const sidebarLinks = [
  {
    title: "Discover",
    links: [
      {
        label: "Home",
        icon: <Home className="mr-2 h-4 w-4" />,
        href: "/",
      },
      {
        label: "Search",
        icon: <Search className="mr-2 h-4 w-4" />,
        href: "/search",
      },
    ],
  },
  {
    title: "Library",
    links: [
      {
        label: "Playlists",
        icon: <ListMusic className="mr-2 h-4 w-4" />,
        href: "/playlists",
      },
      {
        label: "Songs",
        icon: <Music2 className="mr-2 h-4 w-4" />,
        href: "/songs",
      },
      {
        label: "Made for You",
        icon: <User className="mr-2 h-4 w-4" />,
        href: "/made-for-you",
      },
      {
        label: "Artists",
        icon: <Mic2 className="mr-2 h-4 w-4" />,
        href: "/artists",
      },
      {
        label: "Albums",
        icon: <Library className="mr-2 h-4 w-4" />,
        href: "/albums",
      },
    ],
  },
];

export function Sidebar({ playlists }: Props) {
  return (
    <div className="border-r">
      <h1 className="flex items-center gap-2 px-6 mt-4 font-bold text-2xl">
        awen <Music />
      </h1>
      <div className="space-y-4">
        {/* <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            <Button
              variant="secondary"
              size="sm"
              className="w-full justify-start"
            >
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
          <hr className="mt-4" />
        </div> */}
        <div>
          <div className="px-4 py-2">
            {sidebarLinks.map((section) => (
              <div key={section.title} className="py-4">
                <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
                  {section.title}
                </h2>
                <div className="space-y-1">
                  {section.links.map((link) => (
                    <Link key={link.label} href={`/app/${link.href}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                      >
                        {link.icon}
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                </div>
                <hr className="mt-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-2">
        <h2 className="relative px-6 text-lg font-semibold tracking-tight">
          Playlists
        </h2>
        <ScrollArea className="flex-1 px-2">
          <div className="space-y-1 p-2">
            {playlists?.map((playlist) => (
              <Button
                key={playlist}
                variant="ghost"
                size="sm"
                className="w-full justify-start font-normal"
              >
                <ListMusic className="mr-2 h-4 w-4" />
                {playlist}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
