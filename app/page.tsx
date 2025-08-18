import Image from "next/image";
import Link from "next/link";
import {
  PhoneIcon,
  EnvelopeIcon,
  TruckIcon,
  CubeIcon,
  MapIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  const providers = [
    { name: "DHL", logo: "/logos/dhl.png", link: "https://www.dhl.com" },
    { name: "FEDEX", logo: "/logos/fedex.png", link: "https://www.fedex.com" },
    { name: "UPS", logo: "/logos/ups.png", link: "https://www.ups.com/track?loc=en_IN" },
    { name: "DPD", logo: "/logos/dpd.png", link: "https://www.dpd.com" },
    { name: "Transit Point ", logo: "/logos/transit.png", link: "https://transitpl.com" },
    { name: "Aramex", logo: "/logos/aramex.png", link: "https://www.aramex.com/track/shipments" },
    { name: "Skynet", logo: "/logos/skynet.png", link: "https://skynetww.com" },
    { name: "SELF", logo: "/logos/self.png", link: "#" },
  ];

  const benefits = [
    {
      icon: <CubeIcon className="w-12 h-12 text-yellow-400" />,
      title: "Premium Packing",
      desc: "Good packing facilities with on-the-spot service ensuring safety of goods.",
    },
    {
      icon: <TruckIcon className="w-12 h-12 text-yellow-400" />,
      title: "Weight-to-Weight Packing",
      desc: "We optimize packing to match weight requirements without compromise.",
    },
    {
      icon: <MapIcon className="w-12 h-12 text-yellow-400" />,
      title: "Live Tracking",
      desc: "Tracking facilities for each shipment so you're always informed.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white scroll-smooth border-yellow-400">
      {/* Navbar */}
      <nav className="sticky top-0 bg-gray-800 shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-yellow-400">Rishav Courier</h1>
          <ul className="hidden md:flex space-x-8">
            {["Home", "Tracking", "Services", "Contact"].map((item) => (
              <li key={item} className="relative group cursor-pointer">
                <a href={`#${item.toLowerCase()}`}>{item}</a>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header id="home" className="bg-gray-800 py-8 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-yellow-400">
            Rishav Domestic & International Courier Service
          </h2>
          <p className="mt-3 text-gray-300 text-lg sm:text-xl font-semibold uppercase tracking-wide">
            SHOP NO. 6, FIRST FLOOR, GURU LAL JI MARKET, NEAR BUS STAND,
            GURDASPUR ROAD, BATALA - 143505
          </p>
        </div>
      </header>

      {/* Tracking Info Section */}
      <section id="tracking" className="bg-gradient-to-r from-gray-800 to-gray-700 py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Track Your Shipment with Ease
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We provide{" "}
              <span className="text-yellow-400">tracking facilities</span> for
              each shipment. Stay updated from pickup to delivery — we ensure
              full transparency.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-yellow-400/40 transition">
                <PhoneIcon className="w-8 h-8 text-yellow-400 mr-3" />
                <a href="tel:6284618088" className="text-lg hover:underline">
                  6284618088
                </a>
              </div>
              <div className="flex items-center bg-gray-800 p-4 w-max rounded-lg shadow-lg hover:shadow-yellow-400/40 transition">
                <EnvelopeIcon className="w-8 h-8 text-yellow-400 mr-3" />
                <a
                  href="mailto:rishavkapoor138@gmail.com"
                  className="text-lg hover:underline"
                >
                  rishavkapoor138@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden flex justify-center items-center">
            <Image
              src="/logos/boy.gif"
              alt="Tracking Illustration"
              width={500}
              height={300}
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Service Providers */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-yellow-400 tracking-wide">
    Our Service Providers
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">

    {providers.map((p) => (
      <div
        key={p.name}
        className="group bg-gray-800 border border-yellow-400/30 rounded-2xl shadow-md 
                   hover:shadow-yellow-400/40 hover:border-yellow-400 
                   transition-transform transform hover:-translate-y-3 duration-300 
                   flex flex-col"
      >
        {/* Logo */}
        <div className="flex items-center justify-center h-28 bg-gray-900 rounded-t-2xl p-4">
          <Image
            src={p.logo}
            alt={p.name}
            width={90}
            height={60}
            className="object-contain transition-transform group-hover:scale-110 duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-5 text-center flex flex-col flex-grow">
          <p className="font-semibold text-gray-200 uppercase tracking-wide text-sm md:text-base">
            {p.name}
          </p>

          <Link
            href={p.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-4 py-2 text-sm md:text-base
                       bg-gradient-to-r from-yellow-400 to-yellow-500
                       text-gray-900 font-bold rounded-xl shadow-md 
                       hover:from-yellow-500 hover:to-yellow-400 
                       transition-transform transform hover:scale-105"
          >
            Track Now
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Why Choose Us */}
      <section className="bg-gray-800 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">
          Why Choose Us?
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-yellow-400/40 transition flex flex-col items-center text-center"
            >
              {b.icon}
              <h3 className="text-xl font-bold mt-4 mb-2">{b.title}</h3>
              <p className="text-gray-300">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Find Us Section */}
      <section className="bg-gray-900 py-12 border-t border-yellow-400">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6">
            Find Us
          </h2>
          <p className="text-center text-gray-300 mb-6">
            Shop No. 6, First Floor, Guru Lal Ji Market, Near Bus Stand,
            Gurdaspur Road, Batala - 143505
          </p>
          <div className="rounded-lg overflow-hidden shadow-lg border-4 border-yellow-400">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d545.7643169147636!2d75.20074671892476!3d31.820902492420405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDQ5JzE2LjUiTiA3NcKwMTInMDUuMyJF!5e0!3m2!1sen!2sin!4v1755194778278!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-gray-400 text-center py-4 border-t border-yellow-400">
        <p>
          &copy; {new Date().getFullYear()} Rishav Domestic & International
          Courier Service
        </p>
      </footer>
    </div>
  );
}
