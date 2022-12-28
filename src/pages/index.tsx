import Head from "next/head";
import Image from "next/image";
import { Overlaps, Shift } from "../components";
import { IShiftsWithFacilityName } from "../data";

interface HomeProps {
    data: IShiftsWithFacilityName[];
}

export default function Home({ data }: HomeProps) {
    return (
        <div className="p-16">
            <Overlaps />
            <div className="pt-10"></div>
            <div className="grid grid-cols-4 gap-10">
                {data &&
                    data.map((shift: IShiftsWithFacilityName) => (
                        <Shift
                            facilityName={shift.facilities.facility_name}
                            date={shift.shift_date}
                            startTime={shift.start_time}
                            endTime={shift.end_time}
                        />
                    ))}
            </div>
        </div>
    );
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3333/shifts`);
    const data: IShiftsWithFacilityName[] = await res.json();

    console.log(data);

    // Pass data to the page via props
    return { props: { data } };
}
