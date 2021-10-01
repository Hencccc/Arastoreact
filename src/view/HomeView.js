import React, { useEffect, useState } from "react"
import PokemonService from "../shared/api/service/PokemonService"

export const HomeView = () => {

    const [data, setdata] = useState()
    const [search, setSearch] = useState()

    const fetchDataFromExternalAPI = () => {
      
        PokemonService.searchForPokemon(search.toLowerCase())
        .then((response) => setdata(response.data))
        .catch((error) => console.log(error))
      
    }

    const displayData = () => {
        if (data) {
            return <div>
                <h3>name: {data.name}</h3>
                <h3>id: {data.id}</h3>
                <h3>weight: {data.weight}</h3>
                <h3>height: {data.height}</h3>
                <h3>type: {data.types[0].type.name}</h3>
            </div>
        }
    }


    //     const [count, setcount] = useState(0)

    //   useEffect(() => {
    //         alert("Component is being rendered")
    //           return () => {
    //             alert("Component is being removed")
    //         }
    //     }, [count])

    return (
        <div>
            {/* <h1>This is the HomeView</h1> */}
            {/* <button onClick={()=> setcount(count+1)}>Incement with 1</button> */}
            <span>Search for pokemon:</span>
            <input onChange={(event) => setSearch(event.target.value)} />

            <br />
            <button onClick={() => fetchDataFromExternalAPI()}>Make API call</button>
            {displayData()}
        </div>
    )
}