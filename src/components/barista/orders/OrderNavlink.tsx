// import React from 'react';
// import { NavLink } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { ordersStatus } from '../../../utils/constants/constants';

const OrderNavlink = () => {

  const statuses = ordersStatus.map((status) => {
    return (
      <li className="">
        <Link
          className="flex flex-row items-center gap-[11px] py-3 px-9 focus:bg-[#FF8B5B] focus:text-[#FEFEFE] rounded-[50px]"
          to={status.path}
        >
          <div className={` h-3.5 w-3.5 rounded-full bg-[${status.color}]`}></div>
          <span>{status.title}</span>
        </Link>
      </li>
    );
  });

  return (
    <nav className='py-2 px-5'>
      <ul className="flex justify-between ">{statuses}</ul>
    </nav>
  );
};

export default OrderNavlink;
