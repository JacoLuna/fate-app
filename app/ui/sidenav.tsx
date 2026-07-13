import Link from "next/link";

export default function SideNav(){

    return (

        // <div className="flex flex-col h-full overflow-y-auto bg-red-100">
        <div className="flex flex-col h-full bg-red-100">
            <Link className="text-green-800" href="/characters">Characters</Link>
        </div>

    );

}