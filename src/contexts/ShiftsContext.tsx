import { createContext, Dispatch, ReactNode, useState } from "react";
import { IShiftsWithFacilityName } from "../data";

export interface ShiftsContextDataProps {
    shifts: IShiftsWithFacilityName[];
    addShift: Dispatch<IShiftsWithFacilityName>;
}

interface ShiftsProviderProps {
    children: ReactNode;
}

export const ShiftsContext = createContext({} as ShiftsContextDataProps);

export function ShiftsContextProvider({ children }: ShiftsProviderProps) {
    const [shifts, setShifts] = useState<IShiftsWithFacilityName[]>(
        [] as IShiftsWithFacilityName[],
    );

    async function addShift(
        shift: IShiftsWithFacilityName,
    ): Promise<undefined | string> {
        if (shifts.length === 2) {
            return "Select maximum 2 shifts!";
        }
        setShifts([...shifts, shift]);
    }

    return (
        <ShiftsContext.Provider
            value={{
                shifts,
                addShift,
            }}
        >
            {children}
        </ShiftsContext.Provider>
    );
}
