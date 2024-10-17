    import axios from "axios";
    import { useEffect, useState } from "react";
    import { getUsername } from "../helper/helper";

    // axios.defaults.baseURL = process.env.Server_domain;
    axios.defaults.baseURL = "http://localhost:1000";

    // custom hook
    export default function useFetch(query) {
    const [getData, setData] = useState({
        isLoading: false,
        apiData: undefined,
        status: null,
        serverError: null
    });

    useEffect(() => {
    
        console.log('Current query:', query);  // Log the query

        const fetchData = async () => {
        try {
            console.log("Starting fetch...");  // Log fetch initiation
            setData(prev => ({ ...prev, isLoading: true }));
            const {username} = !query ? await getUsername() : "";
            const { data, status } = !query ? await axios.get(`/api/user/${username}`) : await axios.get(`/api/${query}`)  ;
            console.log("Status:", status, "Data:", data);  // Log status and data

            if (status === 200) {
            return setData(prev => ({
                ...prev,
                isLoading: false,
                apiData: data,
                status: status
            }));
            } else {
                setData(prev => ({
                ...prev,
                isLoading: false,
                }));
            }

        } catch (error) {
            console.log("Error occurred:", error);  // Log errors
            return setData(prev => ({
            ...prev,
            isLoading: false,
            serverError: error
            }));
        }
        };

        fetchData();
    }, [query])

    useEffect(() => {
        console.log(getData, " Updated getData after fetch");  // Log updated state
    }, [getData]);

    return getData;
    }
