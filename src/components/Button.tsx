import { api } from "../lib/axios";

interface ButtonProps {
    title: string;
    route: string;
}
const Button = ({ title, route }: ButtonProps) => {
    const getData = async () => {
        const res = await api.get(route);
        const data = await res.data;
        console.log(
            "-----------------------" +
                route.toLocaleUpperCase() +
                "-----------------------",
        );
        console.log(data);
    };
    return (
        <div
            onClick={getData}
            className="flex justify-center bg-gray-200 hover:bg-gray-300 cursor-pointer w-full p-5 rounded-md"
        >
            <p>{title}</p>
        </div>
    );
};

export default Button;
