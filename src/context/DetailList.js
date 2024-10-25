import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./DataContext";
import { Link, useParams } from "react-router-dom";

const DetailsList = () => {
  const { dataList } = useContext(DataContext);
  const {id} = useParams();
  const [item, setItem] = useState(null)

    useEffect(() => {
        const selectItem  = dataList.find((data) => data.id === parseInt(id));
        setItem(selectItem)
    }, [dataList, id])

  return (
    <div>
      <h2>Detail List Data</h2>
      <h2>User ID: {item?.id}</h2>
      <h2>Title: {item?.title}</h2>
      <h2>Body ID: {item?.body}</h2>
    </div>
  );
};

export default DetailsList;
