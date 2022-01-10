import Checkbox from "../components/Checkbox";
import NavBar from "../components/NavBar";

import MenuMobile from "../components/Menu";
import Iphone from "../components/Phone/Iphone";
import Macbook from "../components/Laptop/Macbook";
import Ubuntu from "../components/Terminal/Ubuntu";
import LinuxMint from "../components/Terminal/LinuxMint";
import MacbookTerminal from "../components/Terminal/Macbook";
import LightNavBar from "../components/NavBar/LightNavBar";
import Dell from "../components/Laptop/Dell";

export default function Home() {
  return (
    <div style={{display:"grid",placeItems:"center"}}>
      <LightNavBar></LightNavBar>
      {/* <Dell> */}
      {/* <Macbook> */}
      <Iphone>
        <div style={{margin:"10px",color:"white"}}>Hola asdkljasld</div>
        {/* <MacbookTerminal></MacbookTerminal> */}
        </Iphone>
        {/* </Macbook> */}
      {/* </Dell> */}
    </div>
  );
}
