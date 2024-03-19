import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { sidebarBarista } from '../utils/constants/constants';
import notifications from '../assets/sideBar/notifications.svg';
// import React from 'react';
import Notification from '../components/barista/orders/Notification';

export const BaristaSidebar = () => {
  const [style, setStyle] = useState<string>('translate-x-[-100%]');
  // const [active, setActive] = useState<boolean>(false);
  const [selectedEl, setSelectedEl] = useState<number | null>(null)
  const handleClick = () => {
    setStyle('');
  };

  const changeStyle = (id : number): void => {
    if(selectedEl === id) {
      setSelectedEl(null)
    } else {
      setSelectedEl(id)
    }
    // setActive(!active);
  };

  // const active = (svg: string) => {
  //   console.log(svg, 'active position');
  //   const coloredSvg = React.createElement('img', {
  //     src: svg,
  //     alt: 'icon',
  //     style: { fill: 'black' },
  //   });

  //   // Возвращаем измененный элемент
  //   return coloredSvg;
  // };
  return (
    <div className="relative">
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
              onClick={() => changeStyle(item.id)}
              className="flex justify-between pr-8"
              to={item.path}
              key={item.id}
              style={{color: selectedEl === item.id ? '#FF8B5B' : 'white'}}
            >
              <div
                className="h-24 w-[2px]"
                style={{backgroundColor: selectedEl === item.id ? '#FF8B5B' : 'transparent'}}
              ></div>
              <div className="flex flex-col items-center justify-center gap-2 w-14">
                {
                  selectedEl === item.id ? (
                    <img src={item.activeIcon} alt={item.title} />
                    ) : (
                    <img src={item.icon} alt={item.title} />
                  )
                }
                {/* <img src={item.icon} alt={item.title} /> */}
                <div>{item.title}</div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <Notification style={style} setStyle={setStyle} />
    </div>
  );
};
