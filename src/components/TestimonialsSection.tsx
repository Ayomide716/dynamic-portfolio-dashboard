
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Ayomide delivered exceptional work on our React application. His attention to detail and technical expertise made our project a huge success. Highly recommended!"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO at StartupXYZ",
      company: "StartupXYZ",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Working with Ayomide was a game-changer for our frontend development. He brought innovative solutions and delivered ahead of schedule."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Lead Designer at CreativeStudio",
      company: "CreativeStudio",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Ayomide perfectly translated our designs into beautiful, responsive web applications. His collaboration skills are outstanding."
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Founder at InnovateLab",
      company: "InnovateLab",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The quality of code and user experience Ayomide delivered exceeded our expectations. He's a true professional."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">What Clients Say</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Testimonials and recommendations from satisfied clients and collaborators
          </p>
        </motion.div>

        {/* Featured testimonial carousel */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8"
          >
            <Card className="p-4 sm:p-6 lg:p-8 text-center">
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="flex justify-center space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-base sm:text-lg lg:text-xl text-muted-foreground italic px-2 sm:px-4">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Avatar className="w-12 h-12 sm:w-14 sm:h-14">
                    <AvatarImage 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="object-cover"
                    />
                    <AvatarFallback className="text-sm">
                      {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center sm:text-left">
                    <div className="font-semibold text-sm sm:text-base">{testimonials[currentIndex].name}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-xs sm:text-sm text-primary font-medium">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Testimonial indicators */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid of smaller testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-4 sm:p-6 h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex items-center space-x-3 min-w-0 flex-1">
                      <Avatar className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                        <AvatarImage 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="object-cover"
                        />
                        <AvatarFallback className="text-xs">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-sm sm:text-base truncate">{testimonial.name}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-0.5 flex-shrink-0 ml-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {testimonial.text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
