import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Quiz", path: "/quiz" },
    { name: "Current Affairs", path: "/current-affairs" },
    { name: "Downloads", path: "/downloads" },
    { name: "Videos", path: "/videos" },
    { name: "Notifications", path: "/notifications" },
    { name: "About Us", path: "/about" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const courseOptions = [
    { name: "Banking Courses", path: "/courses/banking" },
    { name: "SSC Coaching", path: "/courses/ssc" },
    { name: "Online Classes", path: "/courses/online" },
    { name: "Interview Training", path: "/courses/interview" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-primary">SSB</span>
                <p className="text-xs text-muted-foreground">Shankar School of Banking</p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>Courses</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {courseOptions.map((option) => (
                  <DropdownMenuItem key={option.path} asChild>
                    <Link to={option.path} className="w-full">
                      {option.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/admission">BANKING / SSC Admission</Link>
            </Button>

            {menuItems.slice(0, 5).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-foreground hover:text-primary transition-colors ${
                  location.pathname === item.path ? "text-primary font-medium" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>More</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {menuItems.slice(5).map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path} className="w-full">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="mb-4">
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link to="/admission">BANKING / SSC Admission</Link>
                </Button>
              </div>
              
              <div className="space-y-2">
                <p className="font-medium text-primary">Courses</p>
                {courseOptions.map((option) => (
                  <Link
                    key={option.path}
                    to={option.path}
                    className="block px-3 py-2 text-base text-foreground hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {option.name}
                  </Link>
                ))}
              </div>

              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base ${
                    location.pathname === item.path
                      ? "text-primary font-medium"
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;