import { notFound } from "next/navigation";

async function fetchUser(id: string) {
  const res = await fetch("https://www.baidu.com");
  if (!res.ok) return undefined;
  return res.json();
}

export default async function Profile({ params }: { params: { id: string } }) {
  const user = await fetchUser(params.id);

  if (!user) {
    notFound();
  }
}
