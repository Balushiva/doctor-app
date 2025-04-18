import { createContext } from "react";
import {doctors} from "../assets/assets/assets"

export const Appcontext=createContext()


const AppcontextProvider=(props)=>{
    const currencysymbol="$"
    const value={
        doctors,
        currencysymbol

    }
    return(
        <Appcontext.Provider value={value}>
            {props.children}



        </Appcontext.Provider>
    )




}
export default AppcontextProvider