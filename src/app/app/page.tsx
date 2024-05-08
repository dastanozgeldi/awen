import { auth } from "@/auth";

const getNewReleases = async () => {
  const session = await auth();
  const response = await fetch(
    "https://api.spotify.com/v1/browse/new-releases",
    {
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
    }
  );
  const data = await response.json();
  return data;
};

export default async function Page() {
  const data = await getNewReleases();
  console.log(data);
  return <div>welcome to app</div>;
}
