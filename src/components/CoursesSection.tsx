import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, Users, BookOpen, Award } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Banking Foundation Course",
      description: "Complete preparation for IBPS, SBI, and other banking exams",
      duration: "6 Months",
      batchSize: "30 Students",
      features: ["Mock Tests", "Study Material", "Personal Mentoring"],
      price: "₹25,000",
      popular: true,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      title: "SSC CGL Preparation",
      description: "Comprehensive coaching for SSC Combined Graduate Level",
      duration: "8 Months",
      batchSize: "25 Students",
      features: ["Previous Year Papers", "Online Tests", "Expert Faculty"],
      price: "₹20,000",
      popular: false,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      title: "Interview Preparation",
      description: "Specialized training for banking and SSC interviews",
      duration: "2 Months",
      batchSize: "15 Students",
      features: ["Mock Interviews", "Personality Development", "Group Discussions"],
      price: "₹15,000",
      popular: false,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
    },
    {
      id: 4,
      title: "Online Classes",
      description: "Flexible online learning with live sessions",
      duration: "4-12 Months",
      batchSize: "50 Students",
      features: ["Live Classes", "Recorded Sessions", "24/7 Support"],
      price: "₹18,000",
      popular: false,
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=300&h=200&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive range of courses designed to help you succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="relative border-border hover:shadow-lg transition-shadow group">
              {course.popular && (
                <Badge className="absolute -top-2 left-4 bg-secondary text-secondary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-primary">
                      {course.price}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4">
                  {course.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {course.batchSize}
                  </div>
                </div>

                <div className="space-y-1">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <Award className="h-3 w-3 mr-2 text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link to={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    Learn More
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/courses">
              <BookOpen className="h-4 w-4 mr-2" />
              View All Courses
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;