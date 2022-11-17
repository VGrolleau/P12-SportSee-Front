import axios from "axios";
import { useEffect, useState } from "react";

function CallAPI() {
    const [datas, setDatas] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getDatas = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3001/user/12`
                );
                setDatas(response.data.data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setDatas(null);
            } finally {
                setLoading(false);
            }
        };
        getDatas();
    }, []);

    return { datas, loading, error }
}

export default CallAPI;