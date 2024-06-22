import {OrderItem} from "../types";
import {useMemo} from "react";
import {formatCurrency} from "../helpers";

type OrderTotalsProps = {
    order: OrderItem[];
    tip: number
}

function OrderTotals({order, tip}: OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total +
        item.quantity * item.price, 0), [order])
    const tipAmount = useMemo(() => subtotalAmount * tip, [subtotalAmount, tip]);
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [subtotalAmount, tipAmount]);

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y propina: </h2>
                <p>Subtotal a pagar: {""}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>

                <p>Propina a pagar: {""}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>

                <p>Total a pagar: {""}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>
        </>
    );
}

export default OrderTotals;