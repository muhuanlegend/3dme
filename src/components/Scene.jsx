'use client'

import { Canvas } from "@react-three/fiber"
import Model from "./Model"
import { Suspense } from "react"

export default function Scene() {
    return (
        <Canvas>
            {/* <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
            />
            <pointLight position={[-10,-10,-10]}/> */}
            <directionalLight position={[-5,-5,5]} intensity={4} />
            <Suspense fallback={<div>Loading...</div>}>

            <Model />
            </Suspense>
        </Canvas>
    )
}