import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CustomerOrdersList = () => {
  const { data } = useSelector((state) => state.customerOrders);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/customer/orders/${id}`);
  };

  return (
    <div>
      {data ? data.map((order) => {
        const date = new Date(order.saleDate).toLocaleDateString('pt-BR');
        return (
          <button
            type="button"
            key={ order.id }
            onClick={ () => handleClick(order.id) }
            data-testid={ `customer_orders__element-order-id-${order.id}` }
          >
            <p>
              Pedido
              <span data-testid={ `customer_orders__element-order-${order.id}` }>
                {order.id}
              </span>
            </p>
            <p data-testid={ `customer_orders__element-delivery-status-${order.id}` }>
              {order.status}
            </p>
            <p data-testid={ `customer_orders__element-order-date-${order.id}` }>
              {date}
            </p>
            <p>
              R$
              <span data-testid={ `customer_orders__element-card-price-${order.id}` }>
                {order.totalPrice.replace('.', ',')}
              </span>
            </p>
            <p data-testid={ `customer_orders__element-card-address-${order.id}` }>
              { `${order.deliveryAddress}, ${order.deliveryNumber}` }
            </p>
          </button>
        );
      }) : <p>Sem pedidos.</p>}
    </div>
  );
};

export default CustomerOrdersList;
