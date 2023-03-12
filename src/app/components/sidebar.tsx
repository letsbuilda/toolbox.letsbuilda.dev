import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

interface CustomlinkComponentProps {
    name: string,
    href: string,
}

function CustomLinkComponent({ name, href, }: CustomlinkComponentProps) {
    return (
        <div className="flex justify-between items-center text-neutral-300 font-bold duration-200 hover:text-indigo-400 hover:bg-neutral-800 cursor-pointer p-3 rounded-md">
            <Link href={href}>
                { name }
            </Link>

            <BsChevronRight />
        </div>
    );
}

export default function Sidebar() {
    return (
        <div className="flex flex-col h-full p-8 bg-black shadow-md rounded-lg">
            <Link href="/" className="font-bold text-2xl duration-200 hover:text-indigo-400 cursor-pointer">Toolbox</Link>

            <div className="flex flex-col space-y-4 mt-8">
                <CustomLinkComponent name="Random Numbers" href="/random_numbers" />
            </div>
        </div>
    );
}
