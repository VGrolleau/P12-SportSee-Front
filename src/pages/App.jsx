import { useEffect } from "react";
import { useNavigate } from "react-router";
import { PropTypes } from 'prop-types';

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

App.propTypes = {
    userId: PropTypes.number
}

export default App;