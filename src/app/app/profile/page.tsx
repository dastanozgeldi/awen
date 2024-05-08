import { auth } from "@/auth";

const getMe = async () => {
  const session = await auth();
  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  const data = await response.json();

  return data;
};

export default async function Page() {
  const me = await getMe();
  console.log("ayo", me);
  return <div>welcome to profile page</div>;
}
