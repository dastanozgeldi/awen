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

interface Props {
  playlists: any[];
}

const sidebarLinks = [
  {
    title: "Discover",
    links: [
      { title: "Home", icon: <Home className="mr-2 h-4 w-4" /> },
      { title: "Search", icon: <Search className="mr-2 h-4 w-4" /> },
    ],
  },
  {
    title: "Library",
    links: [
      { title: "Playlists", icon: <ListMusic className="mr-2 h-4 w-4" /> },
      { title: "Songs", icon: <Music2 className="mr-2 h-4 w-4" /> },
      { title: "Made for You", icon: <User className="mr-2 h-4 w-4" /> },
      { title: "Artists", icon: <Mic2 className="mr-2 h-4 w-4" /> },
      { title: "Albums", icon: <Library className="mr-2 h-4 w-4" /> },
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
                    <Button
                      key={link.title}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start"
                    >
                      {link.icon}
                      {link.title}
                    </Button>
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
