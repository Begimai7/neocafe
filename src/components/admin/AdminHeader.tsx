import Button from '../UI/Button';

import bell from '../../assets/adminHeader/bellSimple.svg';
import Input from '../UI/Input';
// import { FC } from 'react';
// import magnifyingGlass from "../../assets/adminHeader/magnifyingGlass.svg"

interface AdminHeaderProps {
  title: string
}

const AdminHeader: React.FC<AdminHeaderProps> = ({title}) => {
  return (
    <div className='flex flex-col pl-3 pr-6 py-2 mb-3'>
      <div className='flex justify-between items-center'>
        <h3 className='text-5xl font-semibold'>{title}</h3>
        <Button className='bg-[#00315D] w-11 h-11 rounded-full'>
          <img src={bell} />
        </Button>
      </div>

      <div className='flex justify-between items-center gap-2 mt-4'>
        <Input type="text" className="w-full border-0" placeholder="Поиск" />
        <Button className='px-11 py-3 mt-1  bg-[#00315D] text-white rounded-md leading-none'>Создать</Button>

        {/* type?: string; 
  id?: string;
  name?: string;
  label?: string;
  className: string;
  placeholder?: string;
  onChange?: (value: string) => void; */}
      </div>
    </div>
  );
};

export default AdminHeader;
