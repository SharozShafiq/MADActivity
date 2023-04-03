import { useState } from "react";
const Header = (props) => {
    const [theme, setTheme] = useState({name:'light',style:{backgroundColor:'white'}});

    function themeHandler(){
        if(theme.name === 'dark'){
            setTheme({name:'light',style:{backgroundColor:'white'}})
        }
        else if (theme.name === 'light'){
            setTheme({name:'dark',style:{backgroundColor:'grey'}})
        }
    }
    return (
        <div style={theme.style}>
            <p>Welcome, share rides!</p>
            <button id="themebtn"onClick={themeHandler}>Switch Theme</button>
         </div>
    );
}
const Ex4 = () => {
    return (
        <Header heading="!!baham!!" slogan="drive easy"></Header>
    );
} 
export default Ex4; 