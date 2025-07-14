import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Award, BookOpen } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Expert Faculty",
      description: "Experienced teachers with proven track records",
    },
    {
      icon: Users,
      title: "Personal Attention",
      description: "Small batch sizes for individual focus",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Consistent success rates year after year",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Study Material",
      description: "Updated curriculum and practice materials",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About <span className="text-primary">Shankar Banking Academy</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Shankar Banking Academy, based in Chennai, stands out as a premier institution 
              dedicated to nurturing and developing talent for various competitive exams in 
              the banking and government sectors. Known for its comprehensive curriculum and 
              experienced faculty, Shankar Banking Academy offers specialized coaching for 
              a wide range of aspirants.
            </p>
            <div className="mb-8">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/courses">
                  Explore Courses
                </Link>
              </Button>
            </div>
          </div>
          
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
              alt="Students studying at Shankar Banking Academy"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <highlight.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;