import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Bell, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      });
      return;
    }

    // Simulate subscription
    setIsSubscribed(true);
    toast({
      title: "Successfully Subscribed!",
      description: "You'll receive updates about new courses and exam notifications.",
    });
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <Bell className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated with SSB
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest updates on exam notifications, 
                new courses, success stories, and exclusive study materials.
              </p>
            </div>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/10 border-white/30 text-primary-foreground placeholder:text-primary-foreground/70"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="bg-yellow-400 text-primary hover:bg-yellow-300 font-medium px-8"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Subscribe
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <CheckCircle className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                <p className="text-xl font-medium">Thank you for subscribing!</p>
                <p className="opacity-90">You'll receive updates soon.</p>
              </div>
            )}

            <div className="flex justify-center items-center mt-8 space-x-6 text-sm opacity-80">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Exam Notifications
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Course Updates
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Study Materials
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SubscribeSection;