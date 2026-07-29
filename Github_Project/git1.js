import ReactDOM from "react-dom/client";
import Header from "./src/Component/header";
import Body from "./src/Component/body";

function GithubProfile() {
    return (
        <>
            <Header />
            <Body />
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<GithubProfile />);