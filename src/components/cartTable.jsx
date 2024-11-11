const CartTable = ({ cartItems, onRemoveFromCart }) => {
    return (
        <table className="cart-table">
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                    <th>Total</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {cartItems.map(item => (
                    <tr key={item.id}>
                        <td>{item.nome}</td>
                        <td>{item.quantidade}</td>
                        <td>R$ {item.preco}</td>
                        <td>R$ {item.preco * item.quantidade}</td>
                        <td>
                            <button onClick={() => onRemoveFromCart(item.id)}>Remover</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CartTable;