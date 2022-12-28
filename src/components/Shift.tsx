interface ShiftProps {
    facilityName: string;
    date: String;
    startTime: String;
    endTime: String;
}
const Shift = ({ facilityName, date, startTime, endTime }: ShiftProps) => {
    return (
        <div className="border-2 rounded-md border-gray-700 flex flex-col justify-center items-center p-4">
            <p className="text-gray-800 font-bold">{facilityName}</p>
            <p className="text-gray-800">{date.toString()}</p>
            <p className="text-gray-800">
                {startTime.toString()} - {endTime.toString()}
            </p>
        </div>
    );
};

export default Shift;
