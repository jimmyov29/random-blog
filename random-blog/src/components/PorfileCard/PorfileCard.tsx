import { Users } from "@/interfaces/users.types";
import Image from "next/image";

function PorfileCard({ user }: { user: Users }) {
  return (
    <section className=" w-full p-4 rounded-2xl flex flex-col gap-4 bg-slate-500 h-96">
      <figure className=" relative h-52 ">
        <Image
          className=" object-contain  w-auto"
          src={"/no-image.png"}
          alt={" Profile picture"}
          fill
        />
      </figure>
      <article className=" grid gap-3">
        <h2>{user.name}</h2>
        <h2>
          User: <span>{user.username}</span>
        </h2>
        <h3>Vivo en {user.address.city} en la calle {user.address.street}</h3>
      </article>
    </section>
  );
}

export default PorfileCard;