import CloseIcon from '../assets/cardIcons/Close.svg';
import Button from './UI/Button';

const Card = () => {
  return (
    <div className='max-w-[243px] p-4'>
      <div className='flex justify-between'>
        <p>М-47</p>
        <img src={CloseIcon} />
      </div>
      <p className='mt-1.5 mb-2.5 text-lg font-semibold text-[#8F8F8F]'>Валентина</p>
      <div className='mt-1.5'>
        <span className='mr-1.5'>x1</span>
        <span>Капучино</span>
      </div>
      <div className='mt-1.5'>
        <span className='mr-1.5'>x1</span>
        <span>Багровый закат</span>
      </div>
      <div className='mt-1.5'>
        <span className='mr-1.5'>x1</span>
        <span>Мохито Клубничный</span>
      </div>
      <div>Еще +2</div>
      <Button type='button' className='bg-white border border-red-400'>Принять</Button>
    </div>
  );
};

export default Card;
