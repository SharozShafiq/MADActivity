import { useState } from "react";
const Header = (props) => {
    const [headingStyle] = useState({color: 'yellow'});
    const [sloganStyle] = useState({fontStyle: 'italic'});
    return (
        <div>
            <h1 style={headingStyle}>{props.heading}</h1>
            <h3 style={sloganStyle}>{props.slogan}</h3>
         </div>
    );
}
const Ex3 = () => {
    return (
        <Header heading="!!baham!!" slogan="drive easy"></Header>
    );
} 
export default Ex3; 