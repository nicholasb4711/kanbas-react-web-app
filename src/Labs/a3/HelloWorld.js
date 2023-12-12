import { Link } from "react-router-dom";

function HelloWorld() {
    return (
        <div>
            <Link to="/HelloWorld">Hello World</Link>
            <br />
            <Link to="/Labs">Labs</Link>
            <br />
            <Link to="/Kanbas">Kanbas</Link>
            <br />
            <h1>Hello World!</h1>
        </div>

    );
}

export default HelloWorld;