import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SellerNavbar from '../Components/Seller/SellerNavbar';
import { sellerOrdersGet } from '../store/sellerOrders';

const SellerOrders = () => {
  const { data } = useSelector((state) => state.sellerOrders);
  const { info: { id, token } } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!data) dispatch(sellerOrdersGet(token, id));
  }, [data, dispatch, id, token]);

  return (
    <div>
      <SellerNavbar />
    </div>
  );
};

export default SellerOrders;
