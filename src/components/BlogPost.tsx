
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    description: string;
    content: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    author: string;
  };
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/#blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar size={16} />
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>•</span>
                <Clock size={16} />
                <span>{post.readTime}</span>
                <span>•</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                  {post.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {post.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-6">
                {post.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">AF</span>
                  </div>
                  <div>
                    <div className="font-semibold">{post.author}</div>
                    <div className="text-sm text-muted-foreground">Frontend Developer</div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Share2 size={16} className="mr-2" />
                  Share
                </Button>
              </div>
            </div>

            <Card className="mb-8">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
