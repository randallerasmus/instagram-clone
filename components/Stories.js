import faker from "faker"
import {useEffect} from "react";

function Stories(){

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
        console.log(suggestions);
    },  []);

    return <div>
        {/*So now here we will add loads of stoies*/}

        {/*Stories*/}
        {/*Stories*/}
        {/*Stories*/}
        {/*Stories*/}
        {/*Stories*/}
        {/*Stories*/}

    </div>;

}
export default Stories;
