import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { sidebarBarista } from '../utils/constants/constants';
import notifications from '../assets/sideBar/notifications.svg';
import React from 'react';
import Notification from '../components/barista/orders/Notification';

export const BaristaSidebar = () => {
  const [style, setStyle] = useState<string>('translate-x-[-100%]');
  const handleClick = () => {
    setStyle('');
    console.log(setStyle, 'click')
 
  };

  const active = (svg: string) => {
    console.log(typeof svg, 'active position');
    const coloredSvg = React.createElement('img', {
      src: svg,
      alt: 'icon',
      style: { fill: 'black' },
    });

    // Возвращаем измененный элемент
    return coloredSvg;
  };
  return (
    <div className='relative'>
      <div className="flex flex-col justify-center items-center h-screen bg-[#023462] relative">
        <button
          className="bg-white h-[60px] w-[60px] rounded-full absolute top-6"
          onClick={handleClick}
        >
          <img src={notifications} />
        </button>

        <div className="flex flex-col  w-[117px] gap-10 text-white">
          {sidebarBarista.map((item) => (
            <NavLink
              onClick={() => active(item.icon)}
              to={item.path}
              key={item.id}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div>{item.title}</div>
              <div>
                <img src={item.icon} alt={item.title} />
              </div>
            </NavLink>
          ))}
        </div>

      </div>
      <Notification style={style} setStyle={setStyle} />
    </div>
  );
};
