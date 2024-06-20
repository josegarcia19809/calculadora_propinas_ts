import {useState} from "react";
import {MenuItem, OrderItem} from "../types";

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);

    const addItem = (item: MenuItem) => {
        console.log("Agregando", item)
    }
    return {
        addItem
    }
}