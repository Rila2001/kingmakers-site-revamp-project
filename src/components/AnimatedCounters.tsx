import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, BookOpen, Calendar, Users } from "lucide-react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const Counter = ({ end, duration = 2000, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationId: number;

    const updateCount = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationId = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationId = requestAnimationFrame(updateCount);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [end, duration]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-primary">
      {count}{suffix}
    </span>
  );
};

const AnimatedCounters = () => {
  const stats = [
    {
      icon: Users,
      value: 5000,
      suffix: "+",
      label: "No. of Selections",
      description: "Students placed in various banks and government organizations",
    },
    {
      icon: BookOpen,
      value: 25,
      suffix: "+",
      label: "Courses Offered",
      description: "Comprehensive programs for banking and SSC preparation",
    },
    {
      icon: Calendar,
      value: 15,
      suffix: "+",
      label: "Years of Excellence",
      description: "Proven track record of success in competitive exam coaching",
    },
    {
      icon: Trophy,
      value: 98,
      suffix: "%",
      label: "Success Rate",
      description: "Consistent results with high selection percentages",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence and student success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedCounters;