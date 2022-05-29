import React, {useState, useEffect} from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import { IKImage } from "imagekitio-react";
import './game.css';

const unityContext = new UnityContext({
  loaderUrl: "webgl/Build/webgl.loader.js",
  dataUrl: "webgl/Build/webgl.data",
  frameworkUrl: "webgl/Build/webgl.framework.js",
  codeUrl: "webgl/Build/webgl.wasm",
});


const Game = () => {

  const [loaded, setLoaded] = useState(0);

  useEffect(() => {
    if(loaded < 100){
      setTimeout(() => {
        setLoaded(loaded + 3);
      }, 100);
    }
   
  }, [loaded]);

  return(
    <>
    {loaded < 100 && (
      <div id="loading">
        <IKImage
            urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
            path="/loadingscreen.gif"
            loading="lazy"
            lqip={{ active: true }}
          />
      </div>
    )}
    
    <div className="unity_canvas_container">
      <Unity unityContext={unityContext} className = "unity_canvas"/>
    </div>
    </>
  );
}


export default Game;