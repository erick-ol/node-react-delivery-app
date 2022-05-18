import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomerOrdersList from './OrdersList';
import { customerOrdersGet } from '../../../store/customerOrders';

function CustomerOrders() {
  const { data } = useSelector((state) => state.customerOrders);
  const { info: { id, token } } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!data) dispatch(customerOrdersGet(token, id));
  }, [data, dispatch, id, token]);

  return <CustomerOrdersList />;
}

export default CustomerOrders;
