
import { useParams } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const BlogPostPage = () => {
  const { slug } = useParams();

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
        <p>Building scalable React applications requires careful planning, proper architecture, and adherence to best practices. In this comprehensive guide, we'll explore the key strategies and patterns that will help you create maintainable and scalable React applications.</p>
        
        <h2>Project Structure</h2>
        <p>A well-organized project structure is the foundation of any scalable application. Here's a recommended structure:</p>
        <pre><code>src/
  components/
    ui/
    common/
    feature-specific/
  pages/
  hooks/
  utils/
  types/
  store/
  styles/</code></pre>
        
        <h2>Component Architecture</h2>
        <p>When building components for large applications, consider these principles:</p>
        <ul>
          <li><strong>Single Responsibility:</strong> Each component should have one clear purpose</li>
          <li><strong>Composition over Inheritance:</strong> Use composition to build complex UIs</li>
          <li><strong>Props Interface:</strong> Define clear TypeScript interfaces for all props</li>
          <li><strong>Error Boundaries:</strong> Implement error boundaries to handle failures gracefully</li>
        </ul>
        
        <h2>State Management</h2>
        <p>For large applications, consider using state management solutions like Redux Toolkit, Zustand, or React Query for server state. Keep local state minimal and lift state up only when necessary.</p>
        
        <h2>Performance Optimization</h2>
        <p>Key performance considerations include:</p>
        <ul>
          <li>Code splitting with React.lazy() and Suspense</li>
          <li>Memoization with React.memo, useMemo, and useCallback</li>
          <li>Virtual scrolling for large lists</li>
          <li>Image optimization and lazy loading</li>
        </ul>
        
        <h2>Testing Strategy</h2>
        <p>Implement a comprehensive testing strategy with unit tests, integration tests, and end-to-end tests. Use tools like Jest, React Testing Library, and Cypress.</p>
        
        <h2>Conclusion</h2>
        <p>Building scalable React applications is a journey that requires continuous learning and adaptation. By following these best practices and staying updated with the latest developments in the React ecosystem, you'll be well-equipped to handle projects of any size.</p>
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
        <h2>The Evolving Landscape</h2>
        <p>Web development is experiencing rapid transformation. From AI-powered tools to new frameworks and paradigms, the future holds exciting possibilities for developers and users alike.</p>
        
        <h2>AI Integration</h2>
        <p>Artificial Intelligence is revolutionizing how we build and interact with web applications:</p>
        <ul>
          <li><strong>Code Generation:</strong> AI tools like GitHub Copilot are changing how we write code</li>
          <li><strong>Personalization:</strong> AI-driven user experiences and content recommendations</li>
          <li><strong>Accessibility:</strong> AI-powered accessibility tools and automatic alt-text generation</li>
          <li><strong>Testing:</strong> Automated testing and bug detection using machine learning</li>
        </ul>
        
        <h2>New Frameworks and Tools</h2>
        <p>The web development ecosystem continues to evolve with new frameworks and tools:</p>
        <ul>
          <li><strong>Meta-frameworks:</strong> Next.js, Remix, and SvelteKit offering full-stack solutions</li>
          <li><strong>Build Tools:</strong> Vite, esbuild, and swc providing faster build times</li>
          <li><strong>Styling:</strong> CSS-in-JS evolution and utility-first frameworks like Tailwind CSS</li>
        </ul>
        
        <h2>WebAssembly (WASM)</h2>
        <p>WebAssembly is opening new possibilities for web applications, allowing developers to run high-performance code written in languages like Rust, C++, and Go directly in the browser.</p>
        
        <h2>Progressive Web Apps (PWAs)</h2>
        <p>PWAs continue to blur the line between web and native applications, offering offline functionality, push notifications, and app-like experiences.</p>
        
        <h2>The Jamstack Evolution</h2>
        <p>The Jamstack architecture is evolving with better tooling, improved developer experience, and new deployment strategies that make it easier to build fast, secure websites.</p>
        
        <h2>Looking Ahead</h2>
        <p>As we move forward, web development will continue to focus on performance, user experience, and developer productivity. The integration of AI, improved tooling, and new web standards will shape the next generation of web applications.</p>
      `
    },
    "optimizing-performance-modern-apps": {
      id: 3,
      title: "Optimizing Performance in Modern Apps",
      description: "Techniques for improving load times and user experience in contemporary web applications.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Performance",
      image: "/placeholder.svg",
      author: "Ayomide Famoyegun",
      content: `
        <h2>The Performance Imperative</h2>
        <p>In today's fast-paced digital world, performance is not just a nice-to-have—it's essential. Users expect applications to load quickly and respond instantly to their interactions.</p>
        
        <h2>Core Web Vitals</h2>
        <p>Google's Core Web Vitals provide key metrics for measuring user experience:</p>
        <ul>
          <li><strong>Largest Contentful Paint (LCP):</strong> Measures loading performance</li>
          <li><strong>First Input Delay (FID):</strong> Measures interactivity</li>
          <li><strong>Cumulative Layout Shift (CLS):</strong> Measures visual stability</li>
        </ul>
        
        <h2>Frontend Optimization Techniques</h2>
        <h3>Code Splitting</h3>
        <p>Break your application into smaller chunks that can be loaded on demand:</p>
        <pre><code>const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
      &lt;LazyComponent /&gt;
    &lt;/Suspense&gt;
  );
}</code></pre>
        
        <h3>Image Optimization</h3>
        <ul>
          <li>Use modern image formats (WebP, AVIF)</li>
          <li>Implement lazy loading for images</li>
          <li>Serve responsive images with srcset</li>
          <li>Optimize image dimensions and compression</li>
        </ul>
        
        <h3>Bundle Optimization</h3>
        <ul>
          <li>Tree shaking to eliminate dead code</li>
          <li>Minimize and compress JavaScript and CSS</li>
          <li>Use dynamic imports for route-based code splitting</li>
          <li>Implement proper caching strategies</li>
        </ul>
        
        <h2>Runtime Performance</h2>
        <h3>React Optimization</h3>
        <ul>
          <li>Use React.memo for expensive components</li>
          <li>Implement useMemo and useCallback for expensive calculations</li>
          <li>Optimize re-renders with proper state structure</li>
          <li>Use React DevTools Profiler to identify bottlenecks</li>
        </ul>
        
        <h3>Virtual Scrolling</h3>
        <p>For large datasets, implement virtual scrolling to render only visible items:</p>
        <pre><code>import { FixedSizeList as List } from 'react-window';

const VirtualizedList = ({ items }) => (
  &lt;List
    height={600}
    itemCount={items.length}
    itemSize={50}
  &gt;
    {({ index, style }) => (
      &lt;div style={style}&gt;
        {items[index]}
      &lt;/div&gt;
    )}
  &lt;/List&gt;
);</code></pre>
        
        <h2>Network Optimization</h2>
        <ul>
          <li>Implement service workers for caching</li>
          <li>Use CDNs for static assets</li>
          <li>Enable gzip/brotli compression</li>
          <li>Minimize HTTP requests</li>
          <li>Use HTTP/2 for improved multiplexing</li>
        </ul>
        
        <h2>Monitoring and Measurement</h2>
        <p>Use tools like Lighthouse, WebPageTest, and real user monitoring (RUM) to continuously track performance and identify areas for improvement.</p>
        
        <h2>Conclusion</h2>
        <p>Performance optimization is an ongoing process that requires attention to detail and continuous monitoring. By implementing these techniques and staying updated with the latest best practices, you can ensure your applications provide excellent user experiences.</p>
      `
    }
  };

  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return <BlogPost post={post} />;
};

export default BlogPostPage;
