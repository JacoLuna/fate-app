import Link from "next/link";

export default function SideNav(){

    return (

        // <div className="flex flex-col h-full overflow-y-auto bg-red-100">
        <div className="flex flex-col h-full bg-terciary">
            <Link className="text-primary" href="/characters">Characters</Link>
        </div>

    );

}