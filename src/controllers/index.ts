class DiscountController {
    getDiscounts(paymentMethod: 'debit' | 'credit'): Array<{ id: number; description: string; amount: number }> {
        // Lógica para buscar descuentos según el método de pago
        const discounts = [
            { id: 1, description: 'Descuento en supermercado', amount: 10 },
            { id: 2, description: 'Descuento en tienda de ropa', amount: 15 },
            { id: 3, description: 'Descuento en restaurante', amount: 5 },
        ];

        // Filtrar descuentos según el método de pago
        return discounts.filter(discount => {
            // Aquí se puede agregar lógica específica para cada método de pago
            return true; // Retornar todos por ahora
        });
    }
}

export default DiscountController;