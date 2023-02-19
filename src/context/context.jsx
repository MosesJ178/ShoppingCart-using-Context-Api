import React, { createContext, useContext } from 'react'
import nftArray from './data'

const store = createContext(null);
function Context({ children }) {
    const [cart, setcart] = React.useState([]);
    const [showcart,setshowcart]  = React.useState(false);
    return (
        <div>
            <store.Provider value={{ showcart,setshowcart,nftArray, cart, setcart }}>
                {children}
            </store.Provider>
        </div>
    )
}

export default Context

export const useStore = () => {
    return useContext(store)
}