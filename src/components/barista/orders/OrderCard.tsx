import { useState } from 'react';
import CloseIcon from '../../../assets/closeIcon.svg';
import Button from '../../UI/Button';
import { useParams } from 'react-router-dom';
import { ordersData } from '../../../utils/constants/constants';
import DeleteModal from './DeleteModal';
import OrdersPanel from './OrdersPanel';

const OrderCard = () => {
  const [open, setOpen] = useState<string>('');
  const [remove, setRemove] = useState<boolean>(true);
  const { name } = useParams();

  // const inTheEstablishment = ordersData.filter((e) => e.placeFood === 'В заведении');
  const filteredFoods = ordersData.filter((e) => e.status === name);

  const deleteCard = () => {
    if (remove === false) {
      setRemove(true);
    }
    setRemove(false);
  };

  const orderButton = () => {
    switch (name) {
      case 'new':
        return (
          <Button
            type="button"
            className="px-[65px] py-3 text-[#FF8B5B] bg-white border-2 border-[#FF8B5B] w-full mt-6 rounded-[10px]"
          >
            Принять
          </Button>
        );
      case 'inProgress':
        return (
          <Button
            type="button"
            className="px-[65px] py-3 text-[#FF8B5B] bg-white border-2 border-[#FF8B5B] w-full mt-6 rounded-[10px]"
          >
            Завершить
          </Button>
        );

      case 'done':
        return (
          <p className="px-[65px text-[22px] font-bold py-3 text-[#37D400] text-center mt-6">
            Заказ готов
          </p>
        );

      case 'refuce':
        return (
          <p className="px-[65px text-[22px] font-bold py-3 text-[#171717] text-center mt-6">
            Заказ отменен
          </p>
        );
      case 'finished':
        return (
          <p className="px-[65px text-[22px] font-bold py-3 text-[#717171] text-center mt-6">
            Заказ завершен
          </p>
        );
    }
  };

  const openPanel = () => {
    setOpen('translate-x-[-100%]');
  };

  const orderData = filteredFoods.map((data) => {
    return (
      <>
        <div
          onClick={openPanel}
          className="max-w-[243px] mx-6 mb-4 p-4 bg-[#FEFEFE]"
          key={data.id}
        >
          <div className="flex justify-between">
            <p className="font-bold">{data.numberTable}</p>
            <button onClick={deleteCard}>
              <img src={CloseIcon} />
            </button>
          </div>
          <p className="mt-1.5 mb-2.5 text-lg font-semibold text-[#8F8F8F]">
            {data.nameOfWaiters}
          </p>
          <div className="mt-1.5">
            <span className="mr-1.5">x1</span>
            <span>{data.foods.name}</span>
          </div>
          <div className="mt-1.5 text-[#FFA580]">Еще +2</div>
          {orderButton()}
        </div>
      </>
    );
  });

  return (
    <>
      {' '}
      <OrdersPanel open={open} setOpen={setOpen} />
      {remove ? orderData : <DeleteModal close={setRemove} />}{' '}
    </>
  );
};

export default OrderCard;
