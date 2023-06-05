import ShowColor from "./ShowColor";
import { Redirect, useParams } from "react-router-dom";

const FindColor = ({ colors }) => {

    const  {color}  = useParams();


    const foundColor = colors.find(c => color === c.name)
    if (!foundColor) return <Redirect to="/colors"/>

    return <ShowColor name={foundColor.name} value={foundColor.value} />

}

export default FindColor