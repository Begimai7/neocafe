// import { useState } from 'react';

import Button from '../../UI/Button';
import closeIcon from '../../../assets/whiteClose.svg';

import { notificationData } from '../../../utils/constants/constants';

interface notificationProps {
  style: string;
  setStyle: (newStyle: string) => void;
}

const Notification: React.FC<notificationProps> = ({ style, setStyle }) => {
  const closePanel = () => {
    if (setStyle) {
      setStyle('translate-x-[-100%]');
    }
  };
  
  return (
    <div
      className={`flex flex-col items-center pt-6 px-8 bg-[#023462] h-screen w-[500px] text-white absolute top-0 
      transition-transform  duration-500 transform ${style} `}
      style={{zIndex: '10'}}
    >
      <p className="font-semibold mb-7 text-2xl">Уведомления</p>
      <Button className="absolute top-6 right-6" onClick={closePanel}>
        <img src={closeIcon} />
      </Button>

      {notificationData.map((item) => {
        return (
          <div className="flex flex-col w-full mt-5">
            <div className="flex justify-between font-bold">
              <p>{item.table}</p>
              <div>{item.time}</div>
            </div>
            <div className="">
              <span>{item.numberOfTable}</span>
              <span>({item.placeOfFood})</span>
            </div>
            <div className="flex flex-row">
              {item.orders.map((order, index) => {
                return (
                  <div className="" key={index}>
                    <span className="mr-1">{order.food}</span>
                    <span className="mr-[1px] text-[#FF8B5B]">x</span>
                    <span className="text-[#FF8B5B]">{order.count}</span>
                    {index < item.orders.length - 1 && (
                      <span className="mr-2">, </span>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="w-full h-[2px] bg-white mt-3"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Notification;
