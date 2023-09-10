import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllOrdersOfShop } from "../../redux/actions/order";
// import styles from "../../styles/styles";
// import { RxCross1 } from "react-icons/rx";
import ConstructionLoader from "../Layout/ConstructionLoader";

const WithdrawMoney = () => {
  // const { orders } = useSelector((state) => state.order);
  // const { seller } = useSelector((state) => state.seller);
  // const dispatch = useDispatch();
  // const [deliveredOrder, setDeliveredOrder] = useState(null);
  // const [open, setOpen] = useState(false);
  // const [paymentMethod, setPaymentMethod] = useState(false);

  // useEffect(() => {
  //   dispatch(getAllOrdersOfShop(seller._id));

  //   const orderData =
  //     orders && orders.filter((item) => item.status === "Delivered");
  //   setDeliveredOrder(orderData);
  // }, [dispatch]);

  // const totalEarningWithoutTax = deliveredOrder
  //   ? deliveredOrder.reduce((acc, item) => acc + item.totalPrice, 0)
  //   : 0;

  // const serviceCharge = totalEarningWithoutTax
  //   ? totalEarningWithoutTax * 0.1
  //   : 0;
  // const availableBalance =
  //   totalEarningWithoutTax - serviceCharge.toFixed(2) || 0;

  return (
    <div className="w-full h-[90vh] p-8">
      <ConstructionLoader />
    </div>

    // <div className="w-full h-[90vh] p-8">
    //   <div className="w-full h-full bg-white rounded flex items-center justify-center flex-col">
    //     <h5 className="text-[20px] pb-4">
    //       Available Balance: ${availableBalance}
    //     </h5>
    //     <div
    //       className={`${styles.button} text-white !h-[42px] !rounded-[4px]`}
    //       onClick={() => setOpen(true)}
    //     >
    //       Withdraw
    //     </div>
    //   </div>
    //   {open && (
    //     <div className="w-full h-screen fixed top-0 left-0 flex items-center justify-center bg-[#0000004e] z-[999]">
    //       <div className="w-[95%] 800px:w-[50%] bg-white shadow rounded min-h-[40vh] p-3">
    //         <div className="w-full flex justify-end cursor-pointer">
    //           <RxCross1
    //             size={25}
    //             onClick={() => setOpen(false) || setPaymentMethod(false)}
    //           />
    //         </div>
    //         {paymentMethod ? (
    //           <div>
    //             <h3 className="text-[22px] font-Poppins text-center font-[600]">
    //               Add New Payment Method:
    //             </h3>
    //           </div>
    //         ) : (
    //           <>
    //             <h3 className="text-[22px] font-Poppins">
    //               Available Payment Methods:
    //             </h3>
    //             {seller && seller?.paymentMethods ? (
    //               <div></div>
    //             ) : (
    //               <div>
    //                 <p className="text-[18px] pt-2">
    //                   No Payment Methods Available!
    //                 </p>
    //                 <div className="w-full flex items-center">
    //                   <div
    //                     className={`${styles.button} text-white mt-4 !bg-blue-500`}
    //                     onClick={() => setPaymentMethod(true)}
    //                   >
    //                     Add New
    //                   </div>
    //                 </div>
    //               </div>
    //             )}
    //           </>
    //         )}
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
};

export default WithdrawMoney;
