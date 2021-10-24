import Stories from "./Stories"

function Feed () {
    return (
        // Planning out the grid
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
               xl:grid-cols-3 xl:max-w-6xl mx-auto">

            {/*Section on the left*/}
            <section className="col-span-2">
                {/*Stories*/}
                <Stories/>

                {/*Post*/}
            </section>




            {/*Section*/}
            {/*Mini Profile*/}
            {/*Suggestions*/}



        </main>
    )
}

export default Feed
