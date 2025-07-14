import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Trophy, Users, Calendar } from "lucide-react";

const HeroBanner = () => {
  const achievers = [
    {
      id: 1,
      name: "MONISHA",
      bank: "UCO Bank",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b8e5?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "RAJESH KUMAR",
      bank: "SBI",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "PRIYA SHARMA",
      bank: "HDFC Bank",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "ARUN KRISHNA",
      bank: "ICICI Bank",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
  ];

  return (
    <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Trophy className="h-8 w-8 text-yellow-400" />
            <span className="bg-yellow-400 text-primary px-3 py-1 rounded-full text-sm font-medium">
              RESULTS ANNOUNCED
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Congratulations
            <br />
            <span className="text-yellow-400">IBPS SO Achievers</span>
            <br />
            2024–25
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Another year of outstanding results from SSB students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {achievers.map((achiever) => (
            <Card key={achiever.id} className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-yellow-400">
                  <img
                    src={achiever.photo}
                    alt={achiever.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">{achiever.name}</h3>
                <p className="text-yellow-400 font-medium">{achiever.bank}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-yellow-400 text-primary hover:bg-yellow-300">
            <Link to="/success-stories" className="inline-flex items-center space-x-2">
              <span>& More Success Stories</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
          <div className="text-center">
            <Users className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
            <div className="text-3xl font-bold">500+</div>
            <div className="text-sm opacity-90">Students Selected This Year</div>
          </div>
          <div className="text-center">
            <Trophy className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
            <div className="text-3xl font-bold">15+</div>
            <div className="text-sm opacity-90">Years of Excellence</div>
          </div>
          <div className="text-center">
            <Calendar className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
            <div className="text-3xl font-bold">2025</div>
            <div className="text-sm opacity-90">New Batches Starting</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;