export default interface IShiftsWithFacilityName {
    shift_id: number;
    facility_id: number;
    shift_date: String;
    start_time: String;
    end_time: String;
    facilities: {
        facility_name: string;
    };
}
