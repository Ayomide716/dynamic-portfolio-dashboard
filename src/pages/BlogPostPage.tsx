
import { useParams } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const blogPosts = {
    "building-scalable-react-applications": {
      id: 1,
      title: "Building Scalable React Applications",
      description: "Learn best practices for structuring large React applications with TypeScript and modern tooling.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      image: "/placeholder.svg",
      author: "Ayomide Famoyegun",
      content: `
        <h2>Introduction</h2>
        <p>Building scalable React applications requires careful planning, proper architecture, and adherence to best practices. In this comprehensive guide, we'll explore the essential strategies and patterns that will help you create maintainable and robust React applications.</p>
        
        <h2>Project Structure</h2>
        <p>A well-organized project structure is the foundation of any scalable application. Here's a recommended folder structure:</p>
        <ul>
          <li><strong>src/components</strong> - Reusable UI components</li>
          <li><strong>src/pages</strong> - Route-level components</li>
          <li><strong>src/hooks</strong> - Custom React hooks</li>
          <li><strong>src/utils</strong> - Utility functions</li>
          <li><strong>src/services</strong> - API calls and external services</li>
          <li><strong>src/types</strong> - TypeScript type definitions</li>
        </ul>
        
        <h2>Component Design Patterns</h2>
        <h3>Composition over Inheritance</h3>
        <p>React favors composition over inheritance. Design your components to be composable and reusable by accepting children and using render props or compound component patterns.</p>
        
        <h3>Container and Presentational Components</h3>
        <p>Separate your components into two categories:</p>
        <ul>
          <li><strong>Container Components</strong> - Handle logic and state management</li>
          <li><strong>Presentational Components</strong> - Focus on how things look</li>
        </ul>
        
        <h2>State Management</h2>
        <p>For large applications, consider these state management approaches:</p>
        <ul>
          <li><strong>React Context</strong> - For global state that doesn't change frequently</li>
          <li><strong>React Query</strong> - For server state management</li>
          <li><strong>Zustand or Redux Toolkit</strong> - For complex client state</li>
        </ul>
        
        <h2>TypeScript Integration</h2>
        <p>TypeScript provides excellent developer experience and catches errors at compile time. Define clear interfaces for your props and state:</p>
        <p>Always type your component props, state, and API responses to catch errors early and improve code documentation.</p>
        
        <h2>Performance Optimization</h2>
        <ul>
          <li>Use React.memo for expensive components</li>
          <li>Implement code splitting with React.lazy</li>
          <li>Optimize bundle size with tree shaking</li>
          <li>Use useMemo and useCallback judiciously</li>
        </ul>
        
        <h2>Testing Strategy</h2>
        <p>Implement a comprehensive testing strategy:</p>
        <ul>
          <li><strong>Unit Tests</strong> - Test individual components and functions</li>
          <li><strong>Integration Tests</strong> - Test component interactions</li>
          <li><strong>E2E Tests</strong> - Test complete user workflows</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Building scalable React applications is an ongoing process that requires continuous learning and adaptation. By following these best practices and staying updated with the React ecosystem, you'll be well-equipped to handle projects of any size.</p>
      `
    },
    "future-of-web-development": {
      id: 2,
      title: "The Future of Web Development",
      description: "Exploring emerging trends in web development including AI integration and new frameworks.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Web Dev",
      image: "/placeholder.svg",
      author: "Ayomide Famoyegun",
      content: `
        <h2>Introduction</h2>
        <p>The web development landscape is evolving rapidly, with new technologies and paradigms emerging constantly. Let's explore the trends that are shaping the future of web development.</p>
        
        <h2>AI-Powered Development</h2>
        <p>Artificial Intelligence is revolutionizing how we build web applications:</p>
        <ul>
          <li><strong>Code Generation</strong> - AI assistants helping write boilerplate code</li>
          <li><strong>Automated Testing</strong> - AI-powered test generation and maintenance</li>
          <li><strong>Design to Code</strong> - Converting designs directly to functional code</li>
          <li><strong>Performance Optimization</strong> - AI analyzing and optimizing application performance</li>
        </ul>
        
        <h2>Edge Computing and CDNs</h2>
        <p>The move towards edge computing is transforming web performance:</p>
        <ul>
          <li>Reduced latency through geographic distribution</li>
          <li>Better user experience with faster load times</li>
          <li>Improved scalability and reliability</li>
        </ul>
        
        <h2>Web Assembly (WASM)</h2>
        <p>WebAssembly is enabling new possibilities for web applications:</p>
        <ul>
          <li>Near-native performance in the browser</li>
          <li>Language diversity beyond JavaScript</li>
          <li>Complex applications like games and design tools</li>
        </ul>
        
        <h2>Progressive Web Apps Evolution</h2>
        <p>PWAs continue to bridge the gap between web and native apps:</p>
        <ul>
          <li>Enhanced offline capabilities</li>
          <li>Better integration with operating systems</li>
          <li>Improved push notification support</li>
        </ul>
        
        <h2>New Framework Paradigms</h2>
        <h3>Server Components</h3>
        <p>React Server Components and similar technologies are changing how we think about rendering and data fetching.</p>
        
        <h3>Island Architecture</h3>
        <p>Frameworks like Astro are popularizing the concept of island architecture, where only interactive parts of the page are hydrated.</p>
        
        <h2>Web3 and Blockchain Integration</h2>
        <p>Decentralized web technologies are creating new opportunities:</p>
        <ul>
          <li>Decentralized hosting and storage</li>
          <li>Cryptocurrency integration</li>
          <li>NFT marketplaces and galleries</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>The future of web development is exciting and full of possibilities. By staying informed about these trends and experimenting with new technologies, developers can stay ahead of the curve and build the next generation of web applications.</p>
      `
    },
    "optimizing-performance-modern-apps": {
      id: 3,
      title: "Optimizing Performance in Modern Apps",
      description: "Essential techniques and strategies for improving load times, user experience, and overall performance in contemporary web applications.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Performance",
      image: "/placeholder.svg",
      author: "Ayomide Famoyegun",
      content: `
        <h2>Introduction</h2>
        <p>Performance optimization is crucial for modern web applications. Users expect fast, responsive experiences, and search engines reward well-performing sites. This guide covers essential techniques for optimizing your web applications.</p>
        
        <h2>Core Web Vitals</h2>
        <p>Google's Core Web Vitals are essential metrics for user experience:</p>
        <ul>
          <li><strong>Largest Contentful Paint (LCP)</strong> - Loading performance</li>
          <li><strong>First Input Delay (FID)</strong> - Interactivity</li>
          <li><strong>Cumulative Layout Shift (CLS)</strong> - Visual stability</li>
        </ul>
        
        <h2>Frontend Optimization Techniques</h2>
        <h3>Code Splitting</h3>
        <p>Break your application into smaller chunks that can be loaded on demand. This reduces initial bundle size and improves loading times.</p>
        
        <h3>Image Optimization</h3>
        <ul>
          <li>Use modern formats like WebP and AVIF</li>
          <li>Implement responsive images with srcset</li>
          <li>Lazy load images below the fold</li>
          <li>Optimize image dimensions and compression</li>
        </ul>
        
        <h3>CSS and JavaScript Optimization</h3>
        <ul>
          <li>Minify and compress assets</li>
          <li>Remove unused CSS and JavaScript</li>
          <li>Use CSS-in-JS efficiently</li>
          <li>Implement critical CSS inlining</li>
        </ul>
        
        <h2>React-Specific Optimizations</h2>
        <h3>Component Optimization</h3>
        <ul>
          <li>Use React.memo for expensive components</li>
          <li>Optimize useEffect dependencies</li>
          <li>Implement proper key props for lists</li>
          <li>Avoid inline functions in JSX</li>
        </ul>
        
        <h3>State Management</h3>
        <ul>
          <li>Keep state as close to where it's used as possible</li>
          <li>Use state reducers for complex state logic</li>
          <li>Implement proper memoization with useMemo and useCallback</li>
        </ul>
        
        <h3>Virtual Scrolling</h3>
        <p>For large datasets, implement virtual scrolling to render only visible items, significantly improving performance for long lists.</p>
        
        <h2>Network Optimization</h2>
        <ul>
          <li>Implement HTTP/2 and HTTP/3</li>
          <li>Use CDNs for static assets</li>
          <li>Enable gzip/brotli compression</li>
          <li>Implement proper caching strategies</li>
          <li>Use service workers for offline functionality</li>
        </ul>
        
        <h2>Performance Monitoring</h2>
        <h3>Tools and Metrics</h3>
        <ul>
          <li><strong>Lighthouse</strong> - Comprehensive performance audits</li>
          <li><strong>Web Vitals</strong> - Real user monitoring</li>
          <li><strong>Chrome DevTools</strong> - Detailed performance profiling</li>
          <li><strong>WebPageTest</strong> - Network and loading analysis</li>
        </ul>
        
        <h3>Continuous Monitoring</h3>
        <p>Implement performance monitoring in production to catch regressions early:</p>
        <ul>
          <li>Set up performance budgets</li>
          <li>Monitor Core Web Vitals in real-time</li>
          <li>Use performance analytics tools</li>
        </ul>
        
        <h2>Advanced Techniques</h2>
        <h3>Server-Side Rendering (SSR)</h3>
        <p>SSR can significantly improve initial page load times and SEO, especially for content-heavy applications.</p>
        
        <h3>Static Site Generation (SSG)</h3>
        <p>For content that doesn't change frequently, SSG provides the best performance by pre-rendering pages at build time.</p>
        
        <h3>Edge Computing</h3>
        <p>Deploy your applications closer to users using edge computing platforms for reduced latency.</p>
        
        <h2>Conclusion</h2>
        <p>Performance optimization is an ongoing process that requires continuous monitoring and improvement. By implementing these techniques and staying updated with best practices, you can ensure your applications provide excellent user experiences across all devices and network conditions.</p>
      `
    }
  };

  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return <BlogPost post={post} />;
};

export default BlogPostPage;
