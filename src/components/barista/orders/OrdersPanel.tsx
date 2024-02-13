import { useState } from 'react';
import Button from '../../UI/Button';
import closeIcon from '../../../assets/whiteClose.svg';
import { panelData } from '../../../utils/constants/constants';
import plus from '../../../assets/orderIcons/Plus.svg';
import minus from '../../../assets/orderIcons/Minus.svg';
import bag from '../../../assets/orderIcons/Trash.svg';
import cat from '../../../assets/Animal.svg'

interface OrdersPanelProps {
  open: string;
  setOpen: (newStyle: string) => void;
}

interface PanelItem {
  price: number | null;
  cost: number | null;
}

interface PanelDataTypes {
  id: number;
  order: string;
  price: number | null;
  cost: number | null;
  milk: string;
  syrup: string;
  img: string;
}

const OrdersPanel: React.FC<OrdersPanelProps> = ({ setOpen, open }) => {
  // const [cost, setCost] = useState<number>(0);/
  const [closeBills, setCloseBills] = useState<boolean>(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [panelsData, setPanelsData] = useState<PanelItem[]>([]);

  const data: PanelDataTypes[] | null = panelData;

  console.log(data, 'data')

  const closePanel = () => {
    if (setOpen) {
      setOpen('');
    }
  };

  const showDelete = (id: number): void => {
    if (selectedItemId === id) {
      setSelectedItemId(null);
    } else {
      setSelectedItemId(id);
    }
  };

  const plusClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ): void => {
    e.stopPropagation();

    const updatedPanelData = [...panelData];
    updatedPanelData[index].cost += 1;
    setPanelsData(updatedPanelData);
  };

  const minusClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ): void => {
    e.stopPropagation();
    if ( panelData[index].cost > 0) {
      const updatedPanelData = [...panelData];
      updatedPanelData[index].cost -= 1;
      setPanelsData(updatedPanelData);
    }
  };

  const summation = (): number => {
    const data = panelsData
      .map((item) => {
        if (item.price !== null && item.cost !== null) {
          return item.price * item.cost;
        } else {
          return 0; // Return 0 if price or cost is null
        }
      })
      .reduceRight((a, b) => {
        return a + b;
      }, 0);
    return data;
  };

  return (
    <div
      className={`flex flex-col self-end items-center fixed top-0 right-[-40%] h-screen bg-[#023462] w-2/5 pt-6 px-6 
      transition-transform  duration-500 transform  ${open}`}
    >
      <p className="text-[22px] text-white font-semibold mb-5">
        Заказ на вынос
      </p>
      <Button onClick={closePanel} className="absolute top-6 right-6">
        <img src={closeIcon} />
      </Button>
      <div className="w-full h-[65%] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
        {data.length === 0 ? (
          <div className='flex flex-col items-center'>
            <p className='text-white text-[32px]'>Вы еще ничего не добавили</p>
            <img src={cat} />
            </div>
        ) : (
          data.map((item, index) => {
            return (
              <div className="w-full overflow-hidden pr-3" key={item.id}>
                <div
                  onClick={() => showDelete(item.id)}
                  className={`flex w-full relative gap-3
              transition-transform duration-500 transform ${
                selectedItemId === item.id ? 'translate-x-[-128px]' : ''
              }
              `}
                >
                  <div className="flex flex-col text-[#FEFEFE] w-full mt-5 ">
                    <div className="flex gap-4  w-full">
                      <img className="w-24 h-24" src={item.img} />
                      <div className="flex justify-between flex-col w-full">
                        <h5 className="font-bold">{item.order}</h5>
                        <div className="self-end text-[#FF8B5B] font-bold">
                          {item.price} с
                        </div>
                        <div className="flex justify-between w-full">
                          <div className="text-xs flex flex-col">
                            <p>{item.milk}</p>
                            <p>{item.syrup}</p>
                          </div>
                          {!closeBills && (
                            <div className="flex items-center gap-2">
                              <Button
                                id="minusButton"
                                onClick={(
                                  e: React.MouseEvent<HTMLButtonElement>,
                                ) => minusClick(e, index)}
                                className="w-9 h-9 bg-[#8F8F8F] rounded-full"
                              >
                                <img src={minus} />
                              </Button>
                              <div>{item.cost}</div>
                              <Button
                                onClick={(
                                  e: React.MouseEvent<HTMLButtonElement>,
                                ) => plusClick(e, index)}
                                className="w-9 h-9 bg-[#FF8B5B] rounded-full"
                              >
                                <img src={plus} />
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-[2px] bg-white mt-3"></div>
                  </div>
                  <div
                    className={`bg-[#F77] w-[100px] h-3/4 self-end  transition-transform duration-500 transform absolute
              flex justify-center items-center right-[-120px] `}
                  >
                    <img src={bag} />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <Button className="border border-solid border-[#FF8B5B] text-[#FF8B5B] w-full rounded-[10px] mt-3">
        Добавить
      </Button>
      <div className="absolute bottom-6 right-6 left-6 flex flex-col self-end  text-[#FEFEFE]">
        <div className="flex justify-between mb-6">
          <span>Итого</span>
          <span>{summation()} с</span>
        </div>
        <Button
          className="w-full bg-[#FF8B5B] rounded-[10px]"
          onClick={() => setCloseBills(true)}
        >
          Закрыть счет
        </Button>
      </div>
    </div>
  );
};

export default OrdersPanel;
