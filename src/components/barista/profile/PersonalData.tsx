import Button from "../../UI/Button";
import Input from "../../UI/Input";

const PersonalData = () => {
  return (
    <div className="flex flex-col max-w-[706px] px-2 py-2">
      <h4 className="font-bold text-2xl mb-3">Личные данные</h4>
      <div className="flex justify-between mb-3">
        <Input type="text" label="Имя" className="w-[305px]" />
        <Input type="text" label="Фамилия" className="w-[305px]" />
      </div>
      <div className="flex justify-between mb-3">
        <Input type="tel" label="Номер телефона" className="w-[305px]" />
        <Input type="date" label="Дата рождения" className="w-[305px]" />
      </div>

      <Button className="text-[#FF8B5B] border border-[#FF8B5B] py-3 px-8 rounded-2xl self-center mt-5">Редактировать</Button>   
    </div>
  );
};

export default PersonalData;
