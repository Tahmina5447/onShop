'use client'
import React, { useContext, useEffect, useState } from 'react';
import useSWR from 'swr'
import { createContext } from "react";
export const DataContext=createContext();
export const useDataContext = () => useContext(DataContext);
const fetcher = () => fetch(`https://comfort-zone-server.vercel.app/productCategories`).then(res => res.json())
const DataProvider = ({children}) => {
    const [category,setCategory]=useState()
    const { data,isLoading } = useSWR('api/allItems', fetcher)
    const info={
        data,
        setCategory,
        category,
        isLoading
    }
    return (
        <DataContext.Provider value={info}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;