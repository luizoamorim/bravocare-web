import { useContext } from "react";
import {
    ShiftsContext,
    ShiftsContextDataProps,
} from "../contexts/ShiftsContext";

export function useAuth(): ShiftsContextDataProps {
    const context = useContext(ShiftsContext);

    return context;
}
