// Note that custom fetches always start with "use"
import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url, {signal: controller.signal});
                if (!response.ok) { 
                    throw Error(response.statusText);
                }
                const result = await response.json();
                setLoading(false);
                setData(result);
                setError("");
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        }
        fetchData();

        return () => controller.abort();
    }, [url])

    return { data, loading, error }
}
