import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, MapPin, Calendar } from "lucide-react";

const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      name: "MONISHA",
      bank: "UCO Bank",
      position: "Probationary Officer",
      year: "2024",
      location: "Chennai",
      story: "SSB's comprehensive training and mock interviews helped me crack IBPS PO on my first attempt.",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b8e5?w=200&h=200&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "RAJESH KUMAR",
      bank: "State Bank of India",
      position: "Clerk",
      year: "2024",
      location: "Mumbai",
      story: "The faculty at SSB made complex topics simple. Their study material was exactly what I needed.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "PRIYA SHARMA", 
      bank: "HDFC Bank",
      position: "Probationary Officer",
      year: "2024",
      location: "Delhi",
      story: "SSB's interview preparation was exceptional. The personality development sessions boosted my confidence.",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "ARUN KRISHNA",
      bank: "ICICI Bank",
      position: "Specialist Officer",
      year: "2024", 
      location: "Bangalore",
      story: "The technical training provided by SSB was top-notch. I cleared SO exam in my first attempt.",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "SNEHA PATEL",
      bank: "Punjab National Bank",
      position: "Clerk",
      year: "2023",
      location: "Ahmedabad", 
      story: "Small batch sizes at SSB ensured individual attention. Teachers were always available for doubts.",
      photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "VIKRAM SINGH",
      bank: "Bank of Baroda",
      position: "Probationary Officer",
      year: "2023",
      location: "Jaipur",
      story: "SSB's mock tests were exactly like the real exam. This gave me confidence on the exam day.",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Trophy className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Celebrating the achievements of our students who made their dreams come true
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <Card key={story.id} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                      <img
                        src={story.photo}
                        alt={story.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{story.name}</h3>
                      <p className="text-primary font-medium">{story.position}</p>
                      <p className="text-sm text-muted-foreground">{story.bank}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary" className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {story.year}
                    </Badge>
                    <Badge variant="outline" className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {story.location}
                    </Badge>
                  </div>

                  <blockquote className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                    "{story.story}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of successful candidates who achieved their dreams with SSB
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
              View Courses
            </button>
            <button className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;