"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Track } from "@/types";

const accessToken =
  "BQB5Cc_Bht1O4ukgwtA7EipjppBcDkvx01DPI9qvYcKx_vJw2v8BrcnOyle7_WhRu604_6QSvUzdf84_wRnopsGmy_actsx22Anm0LNEremd6Iv0Xlk";

export default function Page() {
  const [input, setInput] = useState("");
  const [tracks, setTracks] = useState<Track[]>([]);

  const handleClick = async () => {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${input}&type=track`,
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    setTracks(data.tracks.items);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <Input
          type="search"
          placeholder="Search..."
          className="h-9 w-[300px]"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button size="sm" onClick={handleClick}>
          Search
        </Button>
      </div>
      <div className="my-6">
        <h1 className="text-2xl font-bold">Search Results</h1>
        <div className="grid grid-cols-4 p-4">
          {tracks.map((track) => (
            <Link key={track.id} href={`/app/tracks/${track.id}`}>
              <Card className="w-60 h-80 p-4 my-2">{track.name}</Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
