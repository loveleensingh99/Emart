import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function Services() {
  return (
    <>
      <div className="md:grid md:grid-cols-3 grid-cols-1 space-y-5 md:space-y-0  space-x-0 md:space-x-4  xl:w-4/5 lg:w-5/6 mx-auto  ">
        {/* Service 1 */}
        <div className="bg-gray-200 group flex flex-col items-center justify-center rounded-xl py-4">
          <div className="bg-white rounded-full p-2 my-2">
            <TbTruckDelivery
              size={40}
              className="text-primary-blue group-hover:text-primary-green"
            />
          </div>

          <h4 className="text-center">Super Fast and Free Delivery</h4>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-200 group  flex flex-col items-center justify-center rounded-xl py-4">
            <div className="bg-white rounded-full p-2 my-2  ">
              <GiReceiveMoney
                size={40}
                className="text-primary-blue group-hover:text-primary-green   "
              />
            </div>

            <h4 className="text-center">Non-Contract Shipping</h4>
          </div>

          <div className="bg-gray-200 group flex flex-col items-center justify-center rounded-xl py-4">
            <div className="bg-white rounded-full p-2 my-2">
              <MdSecurity
                size={40}
                className="text-primary-blue group-hover:text-primary-green"
              />
            </div>

            <h4 className="text-center">Money-back Guranteed</h4>
          </div>
        </div>
        <div className="bg-gray-200 group flex flex-col items-center justify-center rounded-xl py-4">
          <div className="bg-white rounded-full p-2 my-2">
            <RiSecurePaymentLine
              size={40}
              className="text-primary-blue group-hover:text-primary-green"
            />
          </div>

          <h4>Super Fast and Free Delivery</h4>
        </div>
      </div>
    </>
  );
}
