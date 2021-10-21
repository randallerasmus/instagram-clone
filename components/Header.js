import Image from "next/image";
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from "@heroicons/react/outline";

function Header(){
    return (
        <div>
            <div className="flex justify-between max-w-6xl">
                {/*left*/}
                <div className='relative hidden lg:inline-grid h-24 w-24 cursor-pointer'>
                    <Image src="https://links.papareact.com/ocw"
                           layout="fill" objectFit="contain"   />
                </div>
                <div className="relative w-10 h-10 lg:hidden flex-shrink-0">
                    <Image src="https://links.papareact.com/jjm"
                           layout="fill" objectFit="contain"   />


                </div>

                {/*Middle - Search input field*/}
                <div className="relative mt-1 p-9 rounded-md">
                    <div className="absolute inset-y-0 pl-3 flex items-center
                        pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-500"/>
                    </div>

                    <input className="bg-gray-50 block w-full pl-10"
                           type="text"
                           placeholder="Search"/>
                </div>

                {/*Right*/}
            </div>
        </div>



    );
}
    export default Header
