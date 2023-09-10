import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllOrdersOfUser } from "../../redux/actions/order";

const TrackOrder = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <>
        {data && data?.status === "Processing" ? (
          <h1 className="text-[20px]">We are processing your order...</h1>
        ) : data?.status === "Transferred to delivery partner" ? (
          <h1 className="text-[20px]">
            Your order is on the way to our delivery partner...
          </h1>
        ) : data?.status === "Shipping" ? (
          <h1 className="text-[20px]">We are shipping your order...</h1>
        ) : data?.status === "Received" ? (
          <h1 className="text-[20px]">
            Your order is in your city. Our delivery partner will deliver it to
            you soon...
          </h1>
        ) : data?.status === "On the way" ? (
          <h1 className="text-[20px]">
            Our delivery partner is on the way to you...
          </h1>
        ) : data?.status === "Delivered" ? (
          <h1 className="text-[20px]">Your order has been delivered!</h1>
        ) : data?.status === "Processing refund" ? (
          <h1 className="text-[20px]">We processing your refund...</h1>
        ) : data?.status === "Refund Success" ? (
          <h1 className="text-[20px]">
            Your order has been refunded successfully!
          </h1>
        ) : null}
      </>
    </div>
  );
};

export default TrackOrder;
