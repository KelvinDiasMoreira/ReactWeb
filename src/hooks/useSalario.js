
import { useContext } from "react";
import { SalarioContext } from "../context/SalarioContext"

export function useSalario() {
    const value = useContext(SalarioContext)

    return value
}