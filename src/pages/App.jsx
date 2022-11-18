import { useEffect } from "react";
import { useNavigate } from "react-router";

function App(props) {
    const navigate = useNavigate();
    const userId = props.userId;

    useEffect(() => {
        setTimeout(() => {
            // Redirect to Dashboard page
            navigate(`/dashboard/${userId}`, { replace: true });
        }, 10);
    }, []);

    return <div>Redirecting...</div>;
}

export default App;