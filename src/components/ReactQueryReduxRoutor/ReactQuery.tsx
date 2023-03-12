import React from "react";
import style from "./reactquery.module.scss";
import axios from "axios";
import { useQuery } from "react-query";

const ReactQuery = () => {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    axios.get("https://swapi.dev/api/planets/1/").then((res) => res.data)
  );

  if (isLoading) return <p>"loading..."</p>;
  if(isFetching) return <p>"fetching"</p>;
  if (error) return <p>"An error has occurs"</p>;

  return <div className={style["special-input"]}>{data.climate}</div>;
};

export default ReactQuery;
