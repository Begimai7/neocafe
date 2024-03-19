// import React from 'react';
// import { NavLink } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { ordersStatus } from '../../../utils/constants/constants';

interface OrderNavlinkProps {
  place: string;
}

// const setStyle = ({isActive}: {isActive: boolean}) => (isActive ? 'bg-[#FF8B5B]' : '')

const OrderNavlink: React.FC<OrderNavlinkProps> = ({ place }) => {
  return (
    <nav className="py-2 px-5">
      <ul className="flex justify-between ">
        {ordersStatus.map((status) => {
          return (
            <li className="">
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'white' : 'black',
                    backgroundColor: isActive ? '#FF8B5B' : '',
                  };
                }}
                // style={({ isActive }: { isActive: boolean }) => {
                //   return (

                //     backgroundColor: isActive ? 'bg-[#FF8B5B]' : '',
                //   )
                // }}
                className={`flex flex-row items-center gap-[11px] py-3 px-9 rounded-[50px] `}
                // className="flex flex-row items-center gap-[11px] py-3 px-9 focus:bg-[#FF8B5B] focus:text-[#FEFEFE] rounded-[50px]"
                to={`/barista/orders/${place}/${status.path}`}
              >
                <div className={`h-3.5 w-3.5 rounded-full`} style={{backgroundColor: `${status.color}`}}></div>
                <span>{status.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default OrderNavlink;
