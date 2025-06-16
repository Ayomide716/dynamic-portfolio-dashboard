
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      description: "Learn best practices for structuring large React applications with TypeScript and modern tooling.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      image: "/placeholder.svg",
      slug: "building-scalable-react-applications"
    },
    {
      id: 2,
      title: "The Future of Web Development",
      description: "Exploring emerging trends in web development including AI integration and new frameworks.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Web Dev",
      image: "/placeholder.svg",
      slug: "future-of-web-development"
    },
    {
      id: 3,
      title: "Optimizing Performance in Modern Apps",
      description: "Techniques for improving load times and user experience in contemporary web applications.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Performance",
      image: "/placeholder.svg",
      slug: "optimizing-performance-modern-apps"
    }
  ];

  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on modern web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar size={16} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read More <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
