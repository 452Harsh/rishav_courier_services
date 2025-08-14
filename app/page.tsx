import Image from "next/image";
import { PhoneIcon, EnvelopeIcon, TruckIcon, CubeIcon, MapIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const providers = [
    { name: "DHL", logo: "/logos/dhl.png" },
    { name: "FedEx", logo: "/logos/fedex.png" },
    { name: "UPS", logo: "/logos/ups.png" },
    { name: "DPD", logo: "/logos/dpd.png" },
    { name: "Self", logo: "/logos/self.png" },
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
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="sticky top-0 bg-gray-800 shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-yellow-400">Rishav Courier</h1>
          <ul className="hidden md:flex space-x-8">
            {["Home", "Tracking", "Services", "Contact"].map((item) => (
              <li
                key={item}
                className="relative group cursor-pointer"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gray-800 py-8 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-yellow-400">
            Rishav Domestic & International Courier Service
          </h2>
          <p className="mt-3 text-gray-300">
            Shop no. 6, First Floor, Guru Lal Ji Market, Near Bus Stand, Gurudaspur Road, Batala - 143505
          </p>
        </div>
      </header>

      {/* Tracking Info Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-700 py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side: Text Info */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Track Your Shipment with Ease
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We provide <span className="text-yellow-400">tracking facilities</span> for each shipment.
              Stay updated from pickup to delivery — we ensure full transparency.
            </p>

            {/* Unique Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-yellow-400/40 transition">
                <PhoneIcon className="w-8 h-8 text-yellow-400 mr-3" />
                <a href="tel:6284618088" className="text-lg hover:underline">
                  6284618088
                </a>
              </div>
              <div className="flex items-center bg-gray-800 p-4 w-max rounded-lg shadow-lg hover:shadow-yellow-400/40 transition">
                <EnvelopeIcon className="w-8 h-8 text-yellow-400 mr-3" />
                <a href="mailto:rishavkapoor138@gmail.com" className="text-lg hover:underline">
                  rishavkapoor138@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="rounded-lg overflow-hidden ">
            <Image
              src="/logos/boy.gif"
              alt="Tracking Illustration"
              width={500}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Service Providers */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-yellow-400">
          Our Service Providers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {providers.map((p) => (
            <div
              key={p.name}
              className="bg-gray-800 rounded-xl shadow-md hover:shadow-yellow-400/40 transition p-4 flex flex-col items-center"
            >
              <Image src={p.logo} alt={p.name} width={80} height={50} />
              <p className="mt-3 font-semibold text-gray-200">{p.name}</p>
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

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-center py-4">
        <p>&copy; {new Date().getFullYear()} Rishav Domestic & International Courier Service</p>
      </footer>
    </div>
  );
}
