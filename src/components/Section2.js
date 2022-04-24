import * as THREE from "three";
import { forwardRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Html,
  useGLTF,
  softShadows,
  ScrollControls,
  useScroll,
  useTexture,
} from "@react-three/drei";
import useRefs from "react-use-refs";
import Notebook from "./Notebook.js";
import "./Section2.css";
const Section2 = () => {
  return (
    <div className="Section2">
      <Canvas dpr={[1, 2]} camera={{ position: [0, -3.2, 40], fov: 12 }}>
        <ScrollControls pages={3}>
          <Notebook />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Section2;
