import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Track } from "@/types";
import Link from "next/link";

const accessToken =
  "BQB5Cc_Bht1O4ukgwtA7EipjppBcDkvx01DPI9qvYcKx_vJw2v8BrcnOyle7_WhRu604_6QSvUzdf84_wRnopsGmy_actsx22Anm0LNEremd6Iv0Xlk";

const getTrack = async (id: string): Promise<Track> => {
  const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await response.json();
  console.log("img,", data.images);
  return data;
};

export default async function Page({ params }: { params: { id: string } }) {
  const track = await getTrack(params.id);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{track.name}</h1>
      <div className="flex items-center gap-2">
        Artists:
        {track.artists.map((artist) => (
          <Badge key={artist.id}>{artist.name}</Badge>
        ))}
      </div>

      <Link href={track.external_urls.spotify} className={cn(buttonVariants())}>
        Listen on Spotify
      </Link>
    </div>
  );
}
