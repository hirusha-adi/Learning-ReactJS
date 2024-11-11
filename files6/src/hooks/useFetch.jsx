import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
    const [data, setData] = useState([]);

    const url = `https://api.themoviedb.org/3/${apiPath}?language=en-US&page=1${queryTerm ? `&query=${queryTerm}` : ''}`

    useEffect(() => {
        async function fetchMovies() {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjQ5N2VmMjU5NDdmNGJjZTMyZDZmOWY1MjQ3NzU1NCIsIm5iZiI6MTczMTMyMTcyMi4zMzM0MDYyLCJzdWIiOiI2NzMxZGM2YjY4OTVmMzgyMmU0NWY2YWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aSmki4Z2_wrkDc_8O8ayf_H41imRIon-6oTmyvl-gDY'
                }
            };
            const response = await fetch(url, options)
            const data = await response.json()
            setData(data.results)
        }
        fetchMovies()
    }, [url])

    return { data }
}