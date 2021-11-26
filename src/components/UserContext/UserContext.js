import React, { createContext, useState } from 'react'


export const UserContext = createContext();

export const UserProvider =(props)=>{
    const [users, setUsers] = useState([
        {id:1,name:'Joy',position:'FrontEnd',salary:28000},
        {id:2,name:'Tusar',position:'BackEnd',salary:32000},
        {id:3,name:'Mohim',position:'Manager',salary:40000},
    ])

    return(
        <UserContext.Provider value={[users,setUsers]}>
            {props.children}
        </UserContext.Provider>
    );
};