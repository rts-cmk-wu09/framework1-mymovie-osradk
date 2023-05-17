import Lottie from "lottie-react";
import groovyWalkAnimation from "./lottie.json";

const ErrorView = () => {


    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "lightblue"
      };
    return ( 
        <div style={containerStyle}>
        <Lottie animationData={groovyWalkAnimation} />
      </div>
     );
}
 
export default ErrorView;