import Modal from './UI/Modal';
import { useState } from 'react';
import Input from './UI/Input';
import image from '../assets/newBranchIcons/cloudArrowUp.svg';
import closeIcon from '../assets/newBranchIcons/close.svg';

const NewBranch: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClose = () => setIsOpen(false);
  return (
    <Modal
      width="600px"
      open={isOpen}
      onClose={handleClose}
      borderRadius="30px"
      padding="32px"
    >
      <div className="bg-red-500">
        <div
          className="flex items-center content-between bg-red-500"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <h5 className="font-bold" style={{ fontSize: '24px' }}>
            Новый филиал
          </h5>
          <img style={{marginBottom: '9px'}} src={closeIcon} />
        </div>
        <p
          className="font-semibold"
          style={{ marginTop: '24px', fontSize: '22px' }}
        >
          Добавьте фотографию филиала
        </p>

        <label
          htmlFor="new_branch"
        >
          <div
            className="flex justify-center items-center w-full bg-orange-700"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F4F4F4',
              height: '209px',
              marginTop: '16px',
            }}
          >
            <div
              className="flex justify-center items-center"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: 'calc(100% - 32px)',
                height: 'calc(100% - 36px)',
                backgroundColor: '#FFFFFF',
                border: '1px dashed #CDD3DD',
              }}
            >
              <img src={image} alt="Uploaded Image" />
              <p
                className="text-center m-w-[309px]"
                style={{ textAlign: 'center', maxWidth: '309px' }}
              >
                Перетащите изображение для изменения или обзор
              </p>
            </div>
          </div>
        </label>
        <Input id="new_branch" style={{ display: 'none' }} type="file" />

        <p
          style={{
            fontSize: '22px',
            fontWeight: '600',
            textTransform: 'uppercase',
            marginTop: '24px',
          }}
        >
          Название и адрес
        </p>
        <div
          style={{
            marginTop: '16px',
          }}
        >
          <p
            style={{
              color: '#C1C1C3',
              marginBottom: '8px',
            }}
          >
            
            Название кофейни
          </p>
          <Input
            id="29"
            name="name of branch"
            placeholder="Название филиала"
            type="text"
            // label="Название кофейни"
            style={{
              padding: '16px 18px',
              backgroundColor: '#EDEDED',
              width: '100%',
              borderRadius: '10px',
            }}
          />
        </div>
        <div>
          <p
            style={{
              color: '#C1C1C3',
              marginBottom: '8px',
            }}
          >
            Адрес
          </p>
          <Input
            id="29"
            name="adress of branch"
            placeholder="Адрес нового филиала"
            type="text"
            style={{
              padding: '16px 18px',
              backgroundColor: '#EDEDED',
              width: '100%',
              borderRadius: '10px',
            }}
          />
        </div>
        <div>
          <p
            style={{
              color: '#C1C1C3',
              marginBottom: '8px',
            }}
          >
            Номер телефона
          </p>
          <Input
            id="29"
            name="phone number of branch"
            placeholder="Введите номер телефона"
            type="tel"
            style={{
              padding: '16px 18px',
              backgroundColor: '#EDEDED',
              width: '100%',
              borderRadius: '10px',
            }}
          />
        </div>
        <p>Заполните график работы</p>
      </div>
    </Modal>
  );
};

export default NewBranch;
