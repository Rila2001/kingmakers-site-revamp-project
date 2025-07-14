import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Award, CheckCircle } from "lucide-react";

const Banking = () => {
  const courses = [
    {
      title: "IBPS PO Foundation",
      duration: "6 Months",
      fee: "₹25,000",
      features: ["Complete Syllabus Coverage", "Monthly Mock Tests", "Personal Mentoring", "Study Material"],
    },
    {
      title: "SBI Clerk Preparation",
      duration: "4 Months", 
      fee: "₹18,000",
      features: ["Focused Training", "Previous Year Papers", "Online Test Series", "Doubt Clearing Sessions"],
    },
    {
      title: "Banking Interview Prep",
      duration: "2 Months",
      fee: "₹12,000", 
      features: ["Mock Interviews", "Personality Development", "Group Discussions", "Current Affairs"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Banking Courses</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Comprehensive training for all banking exams including IBPS, SBI, and other government bank recruitments
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
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

export default Banking;