import {OrderItem} from "../types";
import {useMemo} from "react";
import {formatCurrency} from "../helpers";

type OrderTotalsProps = {
    order: OrderItem[];
}

function OrderTotals({order}: OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total +
        item.quantity * item.price, 0), [order])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y propina: </h2>
                <p>Subtotal a pagar: {""}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>

                <p>Propina a pagar: {""}
                    <span className="font-bold">$0.00</span>
                </p>

                <p>Total a pagar: {""}
                    <span className="font-bold">$0.00</span>
                </p>
            </div>
        </>
    );
}

export default OrderTotals;