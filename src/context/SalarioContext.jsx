import { createContext, useState } from "react";


export const SalarioContext = createContext();

export function SalarioContextProvider(props) {
    const [salary, setSalary] = useState(0)

    const handleGetSalario = (getSalario) => {
        setSalary(getSalario)
    }

    return (

<SalarioContext.Provider value={{ salary, handleGetSalario }}>
    {props.children}
</SalarioContext.Provider>
    )
}



