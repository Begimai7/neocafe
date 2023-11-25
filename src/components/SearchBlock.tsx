import React from 'react';
import notification from '../assets/SearchBlockIcons/notification.svg';
import Button from './UI/Button';
import searchIcon from '../assets/SearchBlockIcons/searchIcon.svg';

interface SearchBlockProps {
  children?: React.ReactNode;
}

const SearchBlock: React.FC<SearchBlockProps> = ({ children }) => {
  return (
    <div>
      <div className="navbar w-full grid grid-cols-2 items-center p-4">
        <div className="flex items-center">
          <a className="text-4xl px-5">Меню</a>
        </div>
        <div className="flex items-center justify-end">
          <button className="bg-[#00315D] w-10 h-10 rounded-full ">
            <img src={notification} alt="Notification" className="px-2" />
          </button>
        </div>
        <div className="relative mt-8 px-5">
          <input
            type="text"
            placeholder="Поиск"
            style={{ width: '800px', height: '2.5rem' }}
            className="input   pl-10 bg-[#E7E7E7] "
          />
          <img
            src={searchIcon}
            className="absolute left-8 top-1/2 transform -translate-y-1/2"
          />
        </div>
        <div className="flex items-center justify-end mt-10">
          <Button styles={'w-44 bg-[#00315D]'}>Создать</Button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default SearchBlock;
