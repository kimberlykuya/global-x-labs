export default function Services() {
  return (
    <div id="services" className="px-20 lg:px-48">
      <p className="font-playfair text-center">
        At GlobalX, we&apos;re closing the gaps in skills, funding, and
        organizational hurdles in digital transformation. We&apos;re here to
        support kids, developers, and entrepreneurs, giving them the chance to
        learn, be creative, and grow their expertise in hardware and emerging
        technologies.
      </p>
      <br />
      <br />
      <p className="text-sm text-center font-bold">OUR SERVICES</p>
      <br />
      <div className="items-center justify-center grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {services.map((service) =>
          serviceDescription(service.title, service.image, service.title)
        )}
      </div>
    </div>
  );
}

const services = [
  {
    title: "Consulting Services",
    image: "/consulting.png",
  },
  {
    title: "Investments",
    image: "/investments.png",
  },
  {
    title: "Digital Skilling",
    image: "/skilling.png",
  },
];

function serviceDescription(title, image, key) {
  return (
    <div key={key}>
      <p className="text-sm mb-2">{title}</p>
      <div className="size-40 sm:size-60 md:size-52 xl:size-64">
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          height={600}
          width={600}
          alt="service"
          src={image}
        />
      </div>
    </div>
  );
}
