import faker from "faker"
import {useEffect, useState} from "react";
import Story from "./Story";


function Stories(){

    const [suggestions,setSuggestions] = useState([]);

    // What the stories does?
    //     1. renders out a list of stories
    //     2. These stories we have to get from somewhere - No API at the moment
    // Solution is to fake the data for now faker.js - will use firebase v9 to pop
    // all the data in

    // Step1
    //  Populate fake data
    // useffect
    useEffect(() => {
        const suggestions = [...Array(20)].map((_,i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
            }));

        setSuggestions(suggestions);
    },  []);

    return (
    <div className="flex space-x-2 p-6
            bg-white mt-8 border-gray-200 border rounded-sm
            overflow-x-scroll scrollbar-thin scrollbar-thumb-black"   >
        {/*So now here we will add loads of stoies*/}

                {suggestions.map((profile) => (
                    <Story
                        key={profile.id}
                        img={profile.avatar}
                        username={profile.username}
                    />
                ))}
        {/*Stories*/}
        {/*Stories*/}
        {/*Stories*/}
        {/*Stories*/}
        {/*Stories*/}
        {/*Stories*/}
    </div>
    );
}
export default Stories;
