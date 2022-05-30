import React, { useEffect, useState} from 'react';
import { useHttpClient } from "../hooks/http-hook";
import DisplayContributors from '../components/DisplayContributors';
import {BASE_API_URL} from '../api/api';

const Contributors = () => {

    const { sendRequest } = useHttpClient();
    const [contributors, setContributors] = useState({
        Don:[],
        Rec:[]
    });

    useEffect(() => {
        const fetchContributors = async () => {
            try {
                const responseData = await sendRequest(
                    BASE_API_URL+'/contributors'
                );
                console.log(responseData);
                setContributors(responseData);
              } catch (err) {
                  console.log(err);
              }
        };
        fetchContributors();
    }, [sendRequest]);

    return (
        <React.Fragment>
            {contributors && <DisplayContributors items={contributors} />}
        </React.Fragment>
    );
};

export default Contributors;