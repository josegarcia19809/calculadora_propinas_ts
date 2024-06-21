function OrderTotals() {
    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y propina: </h2>
                <p>Subtotal a pagar: {""}
                    <span className="font-bold">$0.00</span>
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