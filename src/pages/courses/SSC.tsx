import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle } from "lucide-react";

const SSC = () => {
  const courses = [
    {
      title: "SSC CGL Complete Course",
      duration: "8 Months",
      fee: "₹22,000",
      features: ["Tier 1 & Tier 2 Preparation", "Mock Tests", "Study Material", "Current Affairs"],
    },
    {
      title: "SSC CHSL Preparation",
      duration: "6 Months",
      fee: "₹18,000",
      features: ["Complete Syllabus", "Practice Tests", "English Training", "Math Shortcuts"],
    },
    {
      title: "SSC JE Technical Course", 
      duration: "5 Months",
      fee: "₹20,000",
      features: ["Technical Subjects", "Previous Papers", "Mock Tests", "Expert Faculty"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">SSC Coaching</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Expert coaching for SSC CGL, CHSL, JE and other Staff Selection Commission exams
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <Badge variant="secondary">{course.fee}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SSC;