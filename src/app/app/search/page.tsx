"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Page() {
  const [input, setInput] = useState("");

  const handleClick = async () => {
    const response = await fetch(
      "https://api.spotify.com/v1/search?q=" + input + "&type=track",
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          Authorization:
            "Bearer " +
            new Buffer.from(client_id + ":" + client_secret).toString("base64"),
        },
      }
    );
    const data = await response.json();
    console.log("clicked", input);
    console.log(data);
  };

  return (
    <div>
      <header>
        <div className="flex items-center">
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
      </header>
      welcome to search
    </div>
  );
}
