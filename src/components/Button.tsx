interface ButtonProps {
    title: string;
    url: string;
}
const Button = ({ title, url }: ButtonProps) => {
    const getData = async () => {
        const res = await fetch(url);
        const data = await res.json();
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
