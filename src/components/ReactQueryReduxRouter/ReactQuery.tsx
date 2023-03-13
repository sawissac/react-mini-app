import React, { memo, useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import styles from "./reactquery.module.scss";

type Props = {
  url: string;
};
const ReactQuery: React.FC<Props> = ({ url }) => {
  const { isLoading, error, data, isFetching } = useQuery(
    ["repoData", url],
    () => axios.get(url).then((res) => res.data),
    {
      retry: 1
    }
  );

  if (isLoading) return <p>"loading..."</p>;
  if (isFetching) return <p>"fetching"</p>;
  if (error) return <p>"An error has occurs"</p>;
  return (
    <table className={styles["data-table"]}>
      <thead>
        <tr>
          <td>Data</td>
          <td>Value</td>
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map((i: string, index: number) => {
          if (typeof data[i] === "string" && i !== "url") {
            return (
              <tr key={index}>
                <td>{i}</td>
                <td>{data[i]}</td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};

export default memo(ReactQuery);
