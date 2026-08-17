
import Menu from "./menu";
import { Playfair_Display } from "next/font/google";

export default function Introduction() {
  return (
    <div className="flex items-center justify-center">
      <Menu />
      <div className="mt-20 w-screen lg:w-3/4">
        <img
          alt="introduction image"
          className="w-screen h-auto"
          layout="responsive"
          src="/intro.png"
        />
      </div>
      {/* <div className="absolute top-24 left-1/4 md:left-1/3 lg:left-1/2 transform -translate-x-1/2" style={{ width: 500 }}>
        <p
          style={{
            letterSpacing: -1,
            lineHeight: "80%",
            textAlign: "right",
          }}
          className="font-playfair font-bold text-8xl lg:text-9xl"
        >
          GlobalX Labs
        </p>
      </div>
      <p className="absolute text-sm right-60 top-32">
        Make Innovations Happen
      </p> */}
    </div>
  );
}
