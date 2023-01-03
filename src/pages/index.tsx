import { useState } from "react";
import { Overlaps, Shift } from "../components";
import Button from "../components/Button";
import { IShiftView } from "../data";

interface HomeProps {
    data: IShiftView[];
}

export default function Home({ data }: HomeProps) {
    const [shifts, setShifts] = useState<IShiftView[]>(data);
    const [selectedShiftId, setSelectedShiftsId] = useState<number[]>([]);

    const handleSelectedIds = (shift: IShiftView) => {
        if (shift.isSelected) {
            setSelectedShiftsId(
                selectedShiftId.filter(
                    (shiftId: number) => shiftId !== shift.shift_id,
                ),
            );
            updateShift(shift);
            return;
        }

        if (selectedShiftId.length === 2 && !shift.isSelected) {
            return;
        }

        setSelectedShiftsId([...selectedShiftId, shift.shift_id]);
        updateShift(shift);

        console.log(selectedShiftId);
        <div>Tste</div>;
    };

    const updateShift = (shiftToUpdate: IShiftView) => {
        const shiftsUpdated = shifts.map((shift: IShiftView) => {
            if (shift.shift_id === shiftToUpdate.shift_id) {
                return {
                    shift_id: shift.shift_id,
                    facility_id: shift.facility_id,
                    facilities: shift.facilities,
                    shift_date: shift.shift_date,
                    start_time: shift.start_time,
                    end_time: shift.end_time,
                    isSelected: !shift.isSelected,
                } as IShiftView;
            }

            return shift;
        }) as IShiftView[];
        setShifts(shiftsUpdated);
    };

    return (
        <div className="p-16">
            <Overlaps shiftIds={selectedShiftId} />
            <div className="pt-10"></div>
            <div className="grid grid-cols-4 gap-10">
                {shifts.length &&
                    shifts.map((shift: IShiftView) => (
                        <div
                            key={shift.shift_id}
                            onClick={() => handleSelectedIds(shift)}
                        >
                            <Shift shift={shift} />
                        </div>
                    ))}
            </div>
            <div className="grid grid-cols-3 gap-20 pt-10">
                <Button
                    title="Query 4"
                    url="http://localhost:3333/remainingSpotsByFacilityByJobType"
                />
                <Button
                    title="Query 5"
                    url="http://localhost:3333/existentJobsByNurse"
                />
                <Button
                    title="Query 6"
                    url="http://localhost:3333/nurseCoWorkers"
                />
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3333/shifts`);
    const data: IShiftView[] = await res.json();

    return { props: { data } };
}
