//useLocalStorage

import { useState, useEffect } from "react";

export const useLocalStorage = (key, valorInicial) => {
    const [valorStorage, setValorStorage] = useState( () => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : valorInicial;
        } catch (error) {
            console.log(error);
            return valorInicial;
        }
    })

    useEffect( () => {
        localStorage.setItem(key, JSON.stringify(valorStorage))
    }, [key, valorStorage])

    return [valorStorage, setValorStorage];
}