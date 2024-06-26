import { trpc } from "@web/src/lib/trpc";

export default async function Home() {
  const { greeting } = await trpc.hello.query({
    name: "John Doe",
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This data is coming from TPRC: {greeting}</h1>
    </main>
  );
}
