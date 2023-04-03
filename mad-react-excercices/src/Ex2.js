const Header = (props) => {
    return (
        <div>
            <h1>{props.heading}</h1>
            <h3>{props.slogan}</h3>
         </div>
    );
}
const Ex2  = () => {
    return (
        <Header heading="!!baham!!" slogan="drive easy"></Header>
    );
} 
export default Ex2; 