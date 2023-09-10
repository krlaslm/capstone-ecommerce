import React, { useState } from "react";
import { backend_url, server } from "../../server";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCamera } from "react-icons/ai";
import styles from "../../styles/styles";
import axios from "axios";
import { loadSeller } from "../../redux/actions/user";
import { toast } from "react-toastify";

const ShopSettings = () => {
  const { seller } = useSelector((state) => state.seller);
  const [avatar, setAvatar] = useState();
  const [name, setName] = useState(seller && seller.name);
  const [description, setDescription] = useState(
    seller && seller.description ? seller.description : ""
  );
  const [address, setAddress] = useState(seller && seller.address);
  const [zipCode, setZipCode] = useState(seller && seller.zipCode);
  const [phoneNumber, setPhoneNumber] = useState(seller && seller.phoneNumber);
  const dispatch = useDispatch();

  const handleImage = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setAvatar(file);

    const formData = new FormData();

    formData.append("image", e.target.files[0]);

    await axios
      .put(`${server}/shop/update-shop-avatar`, formData, {
        header: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then((res) => {
        dispatch(loadSeller());
        toast.success("Your shop profile picture updated successfully!");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const updateHandler = async (e) => {
    e.preventDefault();

    axios
      .put(
        `${server}/shop/update-seller-info`,
        {
          name,
          description,
          address,
          zipCode,
          phoneNumber,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Your shop information has been updated successfully!");
        dispatch(loadSeller());
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="w-full min-h-[90vh] flex flex-col items-center">
      <div className="flex w-full 800px:w-[80%] flex-col justify-center my-5">
        {/* profile image */}
        <div className="w-full flex items-center justify-center">
          <div className="relative">
            <img
              src={
                avatar
                  ? URL.createObjectURL(avatar)
                  : `${backend_url}/${seller.avatar}`
              }
              alt=""
              className="w-[150px] h-[150px] object-cover rounded-full cursor-pointer"
            />
            <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
              <input
                type="file"
                id="image"
                className="hidden"
                onChange={handleImage}
              />
              <label htmlFor="image">
                <AiOutlineCamera className="cursor-pointer" />
              </label>
            </div>
          </div>
        </div>

        {/* shop info */}
        <form className="flex flex-col items-center" onSubmit={updateHandler}>
          <div className="w-[100%] flex flex-col items-center 800px:w-[50%] mt-5">
            <div className="w-full pl-[3%]">
              <label className="block pb-2">Name</label>
            </div>
            <input
              type="name"
              className={`${styles.input} !w-[95%]  mb-4 800px:mb-0`}
              required
              placeholder={`${seller.name}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="w-[100%] flex flex-col items-center 800px:w-[50%] mt-5">
            <div className="w-full pl-[3%]">
              <label className="block pb-2">Shop Description</label>
            </div>
            <input
              type="name"
              className={`${styles.input} !w-[95%]  mb-4 800px:mb-0`}
              placeholder={`${
                seller?.description
                  ? seller.description
                  : "Enter your shop description..."
              } `}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="w-[100%] flex flex-col items-center 800px:w-[50%] mt-5">
            <div className="w-full pl-[3%]">
              <label className="block pb-2">Shop Address</label>
            </div>
            <input
              type="name"
              className={`${styles.input} !w-[95%]  mb-4 800px:mb-0`}
              required
              placeholder={seller?.address}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="w-[100%] flex flex-col items-center 800px:w-[50%] mt-5">
            <div className="w-full pl-[3%]">
              <label className="block pb-2">Shop Zip Code</label>
            </div>
            <input
              type="number"
              className={`${styles.input} !w-[95%]  mb-4 800px:mb-0`}
              required
              placeholder={seller?.zipCode}
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>

          <div className="w-[100%] flex flex-col items-center 800px:w-[50%] mt-5">
            <div className="w-full pl-[3%]">
              <label className="block pb-2">Shop Phone Number</label>
            </div>
            <input
              type="number"
              className={`${styles.input} !w-[95%]  mb-4 800px:mb-0`}
              required
              placeholder={seller?.phoneNumber}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="w-[100%] flex flex-col items-center 800px:w-[50%] mt-5">
            <input
              type="submit"
              className={`w-[95%] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
              required
              value="Update Shop Information"
              readOnly
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShopSettings;
