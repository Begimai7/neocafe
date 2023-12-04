import React from 'react';
import Input from '../UI/Input';

const Schedule = [
  {
    day: 'Monday',
  },
  {
    day: 'Tuesday',
  },
  {
    day: 'Wednesday',
  },
  {
    day: 'Thursday',
  },
  {
    day: 'Friday',
  },
  {
    day: 'Saturday',
  },
  {
    day: 'Sunday',
  },
];

const WeekSchedule: React.FC = () => {
  return (
    <div>
      <table className="w-full">
        <tbody className="">
          {Schedule.map((day) => (
            <tr className="pb-4">
              <td>{day.day}</td>
              <td>
                <div className="w-[19px] h-[19px]">
                  <Input
                    type="checkbox"
                    style={{
                      width: '100%',
                      height: '100%',
                      transform: 'scale(1.8)',
                      backgroundColor: '#C1C1C3',
                      color: 'white',
                    }}
                  />
                </div>
              </td>
              <td>
                <div className="flex justify-end my-1">
                  <p className="border-2 border-[#C1C1C3] rounded py-1 px-3 ">
                    08:00
                  </p>
                  <span className="mx-2">-</span>
                  <p className="border-2 border-[#C1C1C3] rounded py-1 px-3 ">
                    17:00
                  </p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeekSchedule;
