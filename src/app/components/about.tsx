export default function About() {
  return (
    <div className="px-20 lg:px-48">
      <p className="text-sm font-bold text-center">
        WELCOME TO GLOBALX INNOVATION LABS
      </p>
      <br />
      <p className="font-playfair text-center">
        At GlobalX Innovation Labs, we believe in the power of innovation to
        transform industries and drive positive change. Our innovation lab
        serves as a dynamic hub where ideas flourish, technologies converge, and
        creativity thrives.
      </p>
      <br />
      <p className="font-playfair text-center">
        Our mission is to <b>MAKE INNOVATIONS HAPPEN</b> by inspiring,
        empowering, and connecting innovators to create meaningful impact.
        Whether you&apos;re a start-up looking to disrupt the status quo or a
        corporation seeking to innovate from within, our innovation lab provides
        the platform and support you need to turn ideas into reality.
      </p>
      <br />
      <br/>
      <p className="text-sm font-bold text-center">OUR PARTNERS</p>
      <br/>
      <div className="w-100 items-center justify-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <img
          className="size-40"
          style={{ objectFit: "contain" }}
          src="http://www.womenintechafrica.com/wp-content/uploads/2016/02/WomenintechSmall.jpg"
        />
        <img
          className="size-40"
          style={{ objectFit: "contain" }}
          src="https://cdn1.vc4a.com/media/2020/01/bmw-foundation-logo.png"
        />
        <img
          className="size-40"
          style={{ objectFit: "contain" }}
          src="https://www.finsmes.com/wp-content/uploads/2022/09/powertofly.png"
        />

        <img
          className="size-40"
          style={{ objectFit: "contain" }}
          src="https://images.neventum.com/logos/2017/78/58cfb1c053a7e-east-africa.png"
        />
      </div>
    </div>
  );
}
