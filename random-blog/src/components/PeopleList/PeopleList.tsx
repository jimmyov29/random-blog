"use client";
import { UsersApi } from "@/api/users";
import PorfileCard from "../PorfileCard/PorfileCard";
import { useEffect, useState } from "react";
import { Users } from "@/interfaces/users.types";

function PeopleList() {
  const [usersList, setUsersList] = useState<Users[]>([]);

  const users = new UsersApi();

  const fetchUsersData = async () => {
    try {
      const data = await users.getUsers();
      setUsersList(data);
    } catch (error) {
      console.error("Error fetching users data:", error);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  return (
    <section className=" grid place-items-center p-4">
      <article className=" mt-10 md:grid flex flex-wrap gap-4 place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1600px]">
        {usersList.map((user, i) => (
          <PorfileCard key={i} user={user} />
        ))}
      </article>
    </section>
  );
}

export default PeopleList;
