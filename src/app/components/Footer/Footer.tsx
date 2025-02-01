import Link from "next/link";
import { navItems } from "../Navigation/NavItems";

export default function Footer() {
  return (
    <footer className="glass-morphism mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <h4 className="text-2xl font-bold mb-6 gradient-text">About Us</h4>
            <p className="text-gray-600 mb-6">
              Shaping the future through innovative education and cutting-edge
              technology. Our commitment to excellence drives us to provide the
              best learning experience for our students.
            </p>
            <div className="flex gap-4">
              {["twitter", "facebook", "instagram", "linkedin"].map(
                (social) => (
                  <a
                    key={social}
                    href={`#${social}`}
                    className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <span className="gradient-text">
                      {social[0].toUpperCase()}
                    </span>
                  </a>
                )
              )}
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-6 gradient-text">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-6 gradient-text">Contact</h4>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong className="block">Email:</strong>
                contact@modernschool.edu
              </p>
              <p className="text-gray-600">
                <strong className="block">Phone:</strong>
                +1 (555) 123-4567
              </p>
              <p className="text-gray-600">
                <strong className="block">Address:</strong>
                123 Innovation Drive
                <br />
                Education City, ED 12345
              </p>
            </div>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-200/30">
          <Link
            href="https://github.com/devfred"
            className="inline-block gradient-text hover:opacity-80 transition-opacity duration-300 text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developed By Dev Fred
          </Link>
        </div>
      </div>
    </footer>
  );
}
