```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error in Next.js 15 if you don't handle it properly
  const nonExistentVariable = someFunctionThatMightNotExist(); 

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>Value: {nonExistentVariable}</p> {/* This line will cause an error */}
    </div>
  );
}
```