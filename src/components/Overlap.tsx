import { useState } from "react";
import { toast } from "react-toastify";
import { IShiftsOverlapVIew } from "../data";

interface OverlapsProps {
    shiftIds: number[];
}

const Overlaps = ({ shiftIds }: OverlapsProps) => {
    const [preLoad, setPreLoad] = useState<boolean>(false);
    const [overlap, setOverlap] = useState<IShiftsOverlapVIew>();
    const verifyShiftsOverlaps = async () => {
        if (shiftIds.length < 2) {
            toast.error("Select two shifts!");
            return;
        }
        const res = await fetch(
            `http://localhost:3333/isShiftsOverlap/[${shiftIds}]`,
        );
        const data: IShiftsOverlapVIew = await res.json();
        setOverlap(data);
        setPreLoad(true);
    };

    return (
        <div className="border-2 rounded-md text-gray-700 font-bold border-gray-300 flex py-4 px-12 justify-between">
            {preLoad && (
                <div className="flex flex-col">
                    <h1>Overlap mintutes: {overlap?.minutes}</h1>
                    <h1>
                        Max Overlap Threshould:{" "}
                        {overlap?.maximumOverlapThreshold}
                    </h1>
                    <h1>
                        Exceeds Overlap Threshould:{" "}
                        {overlap?.isExceedsOverlapThreshold
                            .toString()
                            .toUpperCase()}
                    </h1>
                </div>
            )}
            {!preLoad && (
                <div className="flex flex-col justify-center">
                    <p className="text-red-600">
                        None shifts overlap was selected yet!
                    </p>
                </div>
            )}
            <div className="flex flex-col items-center justify-center">
                <div
                    className="flex font-bold py-2 px-6 border-2 rounded-md border-gray-300 bg-gray-300 hover:cursor-pointer hover:bg-gray-400 hover:border-gray-400"
                    onClick={verifyShiftsOverlaps}
                >
                    Submit
                </div>
            </div>
        </div>
    );
};

export default Overlaps;
