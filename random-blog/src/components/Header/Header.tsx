import Image from "next/image";
import Link from "next/link";

function Header() {
    return ( 
        <section className=" w-full px-4 py-3 bg-neutral-400">
            <Link href={"/"}>
                <Image src={"/logo.png"} alt={"Logo"} width={60} height={60}/> 
            </Link>
            
        </section>
     );
}

export default Header;