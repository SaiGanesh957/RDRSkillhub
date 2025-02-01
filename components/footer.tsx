import Link from "next/link";
import { Building2, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "YouTube", href: "#", icon: Youtube },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="flex justify-center items-center gap-2 mb-8">
          <Building2 className="h-8 w-8" />
          <span className="font-bold text-xl">RDR Software</span>
        </div>
        <nav className="mb-8 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-primary">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mb-8">
          <div className="flex justify-center space-x-10">
            {navigation.social.map((item) => (
              <Link key={item.name} href={item.href} className="text-muted-foreground hover:text-primary">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-8">
          <p className="text-center text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} RDR Software Solutions Pvt Ltd. All rights reserved.
          </p>
          <p className="text-center text-xs leading-5 text-muted-foreground mt-2">
            Developed by  
  <a 
    href="https://psg95.vercel.app" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold hover:underline"
  >
    Ponnaganti Sai Ganesh
  </a> 
  | Full-Stack Web Developer and UI/UX Designer
          </p>
        </div>
      </div>
    </footer>
  );
}