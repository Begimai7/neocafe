import { useState } from 'react';
import image from '../../assets/newBranchIcons/cloudArrowUp.svg';
import Input from './Input';

interface PhotoInputProps {
  height?: string;
}

const PhotoInput: React.FC<PhotoInputProps> = ({height}) => {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFileInputChange = () => {
    const fileInput = document.getElementById(
      'new_branch',
    ) as HTMLInputElement | null;

    if (fileInput?.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      console.log(file, 'file');
      // Чтение файла и обновление отображения
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (result) {
          setSelectedImage(result.toString());
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;

    const fileInput = document.getElementById(
      'new_branch',
    ) as HTMLInputElement | null;
    if (fileInput) {
      fileInput.files = files;

      const changeEvent = new Event('change', { bubbles: true });
      fileInput.dispatchEvent(changeEvent);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  
  return (
    <div
      className="flex justify-center items-center h-[209px] mt-[16px] bg-[#F4F4F4]"
      style={{height: height}}
      onDrop={handleFileDrop}
      onDragOver={handleDragOver}
    >
      <div
        className="flex flex-col justify-around items-center bg-[#FFFFFF] border border-[#CDD3DD] border-dashed"
        style={{
          width: 'calc(100% - 32px)',
          height: 'calc(100% - 36px)',
        }}
      >
        {selectedImage ? (
          <img
            src={selectedImage}
            className="w-[187px] h-[95px] object-contain"
            alt="Selected Image"
          />
        ) : (
          <img src={image} alt="Uploaded Image" />
        )}

        <p className="text-center max-w-[318px] font-semibold">
          Перетащите изображение для изменения или{' '}
          <label
            htmlFor="new_branch"
            className="text-[#00315D] underline cursor-pointer"
          >
            {' '}
            обзор{' '}
          </label>
        </p>
      </div>
      <Input
        id="new_branch"
        accept="image/*"
        style={{ display: 'none' }}
        type="file"
        onChange={handleFileInputChange}
      />
    </div>
  );
};

export default PhotoInput;