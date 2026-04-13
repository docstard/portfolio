"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { FC, useRef } from "react";

type LenisScrollProviderProps = {
    children: React.ReactNode;
};
const LenisHorizontalScrollProvider: FC<LenisScrollProviderProps> = ({ children } : LenisScrollProviderProps) => {
    const lenisRef = useRef(null);
    return <ReactLenis ref={lenisRef} root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true, touchMultiplier: 2, infinite: false,  }}>
        {children as any}
    </ReactLenis>;
};

export default LenisHorizontalScrollProvider;