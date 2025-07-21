import authors from './author.js';
import article1 from "../assets/articles/1.webp";
import article2 from "../assets/articles/2.webp";
import article3 from "../assets/articles/3.jpg";
import article5 from "../assets/articles/5.webp";

const articles = [
  {
    id: '1',
    title: 'The Unabomber Was Right',
    subtitle: 'He saw the future when nobody else did.',
    content: `<p>remember when I first read Ted Kazcynski’s 35,000-word manifesto, “Industrial Society and Its Future,” in 2014. I was a teenager at the time, and I was really blown away by his ideas. He saw the dangers of technology in a way that most people didn’t. A madman who saw the future when nobody else did.</p>
              <p>The manifesto is a lengthy and detailed critique of modern industrial society. Kaczynski argues that technology has led to a loss of freedom, a decline in human intelligence, and an increase in violence.</p>
              <p>He calls for a revolution to overthrow industrial society and return to a simpler way of life. Well, he was right.</p>
              <p>Kaczynski was seen as a crazy old man who was living in a cabin in the woods. But his belief on technology becoming increasingly intrusive is truer than ever. Here’s a piece of his manifesto.</p>`,
    author: authors.find((a) => a.id === '1'), // link author by ID
    duration: "4 min read",
    coverImage: article1,
    createdAt: "Jun24,2023",
    likes: "1.5K",
    comments: "55",
    type: "Member-only story",
    place: "Newspaper1"
  },
  {
    id: '2',
    title: 'I’m Panic Buying: Why It’s Time to Own Physical Media Again',
    subtitle: 'Streaming was supposed to save us. Instead, it made us forget that ownership is power.',
    content: `<p>Streaming was supposed to save us. No more scratched DVDs, lost CDs, or heavy shelves sagging under the weight of box sets. It was the future — limitless, instant, and always there. Until it wasn’t.</p>
              <p>In recent years, we’ve seen just how fragile that promise was. Movies vanish from platforms. Beloved shows get pulled due to licensing disputes. Entire music catalogs disappear overnight because someone didn’t renew a contract. That documentary you saved to your list? Gone before you hit play. The media we once loved now lives under constant threat of erasure. We don’t own it. We rent access to it, on someone else’s terms.</p>
              <p>It’s time to panic buy.</p>
              <h3>Digital Doesnt Mean Forever</h3>
              <p>Kaczynski was seen as a crazy old man who was living in a cabin in the woods. But his belief on technology becoming increasingly intrusive is truer than ever. Here’s a piece of his manifesto.</p>`,
    author: authors.find((a) => a.id === '2'), // link author by ID
    duration: "7 min read",
    coverImage: article2,
    createdAt: "Jun30,2025",
    likes: "269",
    comments: "12",
    type: "Member-only story",
    place: "Newspaper2"
  },
  
  {
    id: '3',
    title: 'AI Agent vs Agentic AI: Understand The Actual Difference',
    subtitle: 'What are AI Agents?',
    content: `<p>We hear a lot about AI agents which can book meetings using tools, search the internet, even generate code. And then came an another term Agentic AI. Sounds similar, right? But actually, they are not. Yes while both involve AI doing things for us, the mindset and design behind them are very different. One follows instructions, the other makes its own decisions based on goals.</p>
              <p>The difference between AI Agent and Agentic AI is a must know concept.</p>
              <p>In this article, we’ll break down what really sets them apart and why this difference is a big deal to understand in AI.</p>
              <h3>What are AI Agents?</h3>
              <p>While an LLM can generate code, we can equip it with a code interpreter tool. This allows it to not only write code but also run it and respond with the computed result (reduces hallucination). So if we ask, “Find the 345th Fibonacci number,” the agent:</p>`,
    author: authors.find((a) => a.id === '3'), // link author by ID
    duration: "6 min read",
    coverImage: article3,
    createdAt: "Jun6,2025",
    likes: "203",
    comments: "20",
    type: "Free",
    place: "Newspaper3"
  },
  {
    id: '4',
    title: 'AI Agent vs Agentic AI: Understand The Actual Difference',
    subtitle: 'What are AI Agents?',
    content: `<p>We hear a lot about AI agents which can book meetings using tools, search the internet, even generate code. And then came an another term Agentic AI. Sounds similar, right? But actually, they are not. Yes while both involve AI doing things for us, the mindset and design behind them are very different. One follows instructions, the other makes its own decisions based on goals.</p>
              <p>The difference between AI Agent and Agentic AI is a must know concept.</p>
              <p>In this article, we’ll break down what really sets them apart and why this difference is a big deal to understand in AI.</p>
              <h3>What are AI Agents?</h3>
              <p>While an LLM can generate code, we can equip it with a code interpreter tool. This allows it to not only write code but also run it and respond with the computed result (reduces hallucination). So if we ask, “Find the 345th Fibonacci number,” the agent:</p>`,
    author: authors.find((a) => a.id === '3'), // link author by ID
    duration: "6 min read",
    coverImage: article1,
    createdAt: "Jun6,2025",
    likes: "203",
    comments: "20",
    type: "Free",
    place: "Newspaper1"
  },
 {
    id: '5',
    title: 'AI Agent vs Agentic AI: Understand The Actual Difference',
    subtitle: 'What are AI Agents?',
    content: `<p>We hear a lot about AI agents which can book meetings using tools, search the internet, even generate code. And then came an another term Agentic AI. Sounds similar, right? But actually, they are not. Yes while both involve AI doing things for us, the mindset and design behind them are very different. One follows instructions, the other makes its own decisions based on goals.</p>
              <p>The difference between AI Agent and Agentic AI is a must know concept.</p>
              <p>In this article, we’ll break down what really sets them apart and why this difference is a big deal to understand in AI.</p>
              <h3>What are AI Agents?</h3>
              <p>While an LLM can generate code, we can equip it with a code interpreter tool. This allows it to not only write code but also run it and respond with the computed result (reduces hallucination). So if we ask, “Find the 345th Fibonacci number,” the agent:</p>`,
    author: authors.find((a) => a.id === '2'), // link author by ID
    duration: "6 min read",
    coverImage: article5,
    createdAt: "Jun6,2025",
    likes: "203",
    comments: "20",
    type: "Member-only story",
    place: "Newspaper1"
  },
  
];

export default articles;
