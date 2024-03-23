import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Friend = () => {
    const upohar = useContext(AssetContext);
    return (
        <div>
            <h2>Friend</h2>
            <p>{upohar}</p>
        </div>
    );
};

export default Friend;