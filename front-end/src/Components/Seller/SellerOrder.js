import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import dataTestId from './data-testids';
import SellerNavbar from './SellerNavbar';

const SellerOrder = () => {
  const { data } = useSelector((state) => state.sellerOrders);
  const [order, setOrder] = React.useState(null);
  const [date, setDate] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    if (data) setOrder(data.find((o) => o.id === +id));
  }, [data, id]);

  React.useEffect(() => {
    if (order) setDate(new Date(order.saleDate).toLocaleDateString('pt-BR'));
  }, [order]);

  const handlePrepare = (e) => {
    e.preventDefault();
    console.log('Preparando');
  };

  const handleDeliver = (e) => {
    e.preventDefault();
    console.log('Enviando');
  };

  return (
    <>
      <SellerNavbar />
      {order && (
        <>
          <header>
            <p>
              Pedido:
              {' '}
              <span data-testid={ dataTestId.orderId }>{order.id}</span>
            </p>
            <p data-testid={ dataTestId.orderDate }>{date}</p>
            <p data-testid={ dataTestId.orderStatus }>{order.status}</p>
            <button
              type="button"
              onClick={ handlePrepare }
              data-testid={ dataTestId.orderPrepare }
            >
              Preparar pedido
            </button>
            <button
              type="button"
              onClick={ handleDeliver }
              data-testid={ dataTestId.orderDispatch }
            >
              Enviar pedido
            </button>
          </header>
          <p data-testid={ dataTestId.orderVal }>{order.totalPrice.replace('.', ',')}</p>
        </>
      )}
    </>
  );
};

export default SellerOrder;
