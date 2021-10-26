import Post from "./Post";
import * as posts from "tailwindcss";

const DUMMY_DATA = [
    {
        id:123,
        username:'randall',
        userImg:'https://links.papareact.com/3ke',
        img:'https://links.papareact.com/3ke',
        caption:"SUBSCRIBE AND DESTROY THE LIKE " +
            "BUTTON for the YT algorithm,"
    },
    {
        id:123,
        username:'joshaa',
        userImg:'https://links.papareact.com/3ke',
        img:'https://links.papareact.com/3ke',
        caption:"SUBSCRIBE AND DESTROY THE LIKE " +
            "BUTTON for the YT algorithm,"
    },
]

function Posts(){
    return (
        <div>
            {posts.map((post) =>(
            <Post key={post.id} id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}/>
                ))}
            <Post/>
            <Post/>
            <Post/>
            <Post/>


        </div>
    );
}
export default Posts;
