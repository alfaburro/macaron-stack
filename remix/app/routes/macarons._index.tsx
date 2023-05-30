import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

const config = require("platformsh-config").config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://main:main@127.0.0.1:30000/main')

export const loader = async () => {

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

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