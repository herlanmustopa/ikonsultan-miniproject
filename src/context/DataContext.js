import React, { createContext, useEffect, useState} from "react";

export const DataContext = createContext();


export const DataProvider = ({children}) => {
    const [dataList, setDataList] = useState([])


    useEffect(() => {
        const fetchData = async() => {
        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/posts");
          const data = await res.json();
          setDataList(data);
        } catch (err) {
            return err
        }
        }

        fetchData()
    }, [])
    return(
        <DataContext.Provider value={{dataList}}>
            {children}
        </DataContext.Provider>
    )
}

