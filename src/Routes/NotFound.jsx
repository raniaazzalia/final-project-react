// TODO: answer here
import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
    // const navigate = useNavigate();

    return (
        <>
            <h1>404 Page Not Found</h1>;
            <Button as={Link} to="/" colorScheme="blue" mt={4}>
                Back to Home
            </Button>
        </>
    );
};

export default NotFound;
