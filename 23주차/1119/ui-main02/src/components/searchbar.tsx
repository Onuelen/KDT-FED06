"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import style from "./searchbar.module.css";

const Searchbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSeach] = useState("");

  const q = searchParams.get("q");

  useEffect(() => {
    setSeach(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!search || q === search) return;
    router.push(`/setSeach?1=${search}`);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?q=${search}`);
  };
  return (
    <div>
      <form className={style.container} onSubmit={onSubmit}>
        <input value={search} type="text" onChange={onChangeSearch} />
        <input type="submit" value="검색" />
      </form>
    </div>
  );
};

export default Searchbar;
