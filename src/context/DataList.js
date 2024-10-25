import React, {useContext, useState} from "react";
import { DataContext } from "./DataContext";
import { Link } from "react-router-dom";


const DataList = () => {
    const {dataList} = useContext(DataContext);
    const [search, setSearch] = useState('');

    const filterData = dataList.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))

    return (
      <div>
        <h2>List Data</h2>
        <input
          type="text"
          placeholder="Cari"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul>
          <div>
            {filterData.map((item) => (
              <li key={item.id}>
                <Link to={`/details/${item.id}`}>
                  {item.id + ". " + item.title}
                </Link>
              </li>
            ))}
          </div>
        </ul>
      </div>
    );
}

export default DataList;