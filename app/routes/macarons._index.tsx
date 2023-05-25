import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async () => {
    return json({
      macarons: [
        {
            name: "Tropical",
            shell: "ananas",
            filling: "marajuca",
        },
        {
            name: "Vanilla",
            shell: "vanilla",
            filling: "vanilla",
        },
      ],
    });
  };


export default function MacaronsPage() {
    const { macarons } = useLoaderData<typeof loader>();
    return(
        <main>
        <h1>Macarons</h1>
        <ul>
            {macarons.map((macaron) => (
                <li key={macaron.name}>
                    <Link
                        to={macaron.name}
                        className=""
                    >{macaron.name}</Link>
                </li>
            ))}
        </ul>
        </main>
    );
}