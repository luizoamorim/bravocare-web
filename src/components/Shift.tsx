import { IShiftView } from "../data";

interface ShiftProps {
    shift: IShiftView;
}

const Shift = ({ shift }: ShiftProps) => {
    return (
        <div
            className={
                !shift.isSelected
                    ? `border-2 rounded-md border-gray-300 flex flex-col justify-center items-center p-4 cursor-pointer text-gray-800 hover:bg-blue-500 hover:border-blue-500 hover:text-white`
                    : `border-2 rounded-md border-blue-400 flex flex-col justify-center items-center p-4 cursor-pointer bg-blue-400 text-white  hover:bg-blue-300 hover:border-blue-300`
            }
        >
            <p className="font-bold text-gray-700">
                {shift.facilities.facility_name}
            </p>
            <p className="text-gray-700">{shift.shift_date.toString()}</p>
            <p className="text-gray-700">
                {shift.start_time.toString()} - {shift.end_time.toString()}
            </p>
        </div>
    );
};

export default Shift;
