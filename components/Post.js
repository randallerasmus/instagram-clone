import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon, DotsHorizontalIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled} from "@heroicons/react/solid";

function Post(id,username,userImg, img,caption){
    return (
        <div >
            <h1>I am a post</h1>

            {/*Header*/}
            <div>
                <img src="" alt="" />
                <p>{username}</p>
                <DotsHorizontalIcon className="h-5"/>
            </div>


            {/*img*/}
            {/*Buttons*/}
            {/*Captions/*}
            {/*Comments*/}
            {/*input Box*/}

        </div>
    )
}
export default Post
