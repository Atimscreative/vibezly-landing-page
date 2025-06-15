import {
  CheckCircle,
  Bot,
  TrendingUp,
  Shield,
  Users,
  Zap,
  MessageSquare,
  Trophy,
} from "lucide-react";

import Dick from "@/assets/dick.png";
import Sam from "@/assets/sam.png";
import Diamond from "@/assets/diamond.png";
import Karan from "@/assets/karan.png";

export const teamMembers = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Former Google AI engineer with 8+ years in blockchain development",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Sarah Kim",
    role: "CTO",
    bio: "Telegram Bot specialist and full-stack developer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Marcus Johnson",
    role: "Head of Community",
    bio: "Crypto community veteran with 50K+ followers",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Elena Rodriguez",
    role: "Lead Developer",
    bio: "DeFi protocol architect and smart contract auditor",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
];

export const partnerships = [
  { name: "Binance Smart Chain", logo: "BSC" },
  { name: "Ethereum", logo: "ETH" },
  { name: "Polygon", logo: "MATIC" },
  { name: "Chainlink", logo: "LINK" },
  { name: "The Graph", logo: "GRT" },
];

export const roadmapItems = [
  {
    phase: "Q1 2024",
    title: "MVP Launch",
    description: "Basic bot functionality, token launch, initial communities",
    status: "completed",
  },
  {
    phase: "Q2 2024",
    title: "AI Enhancement",
    description: "Advanced AI moderation, sentiment analysis, smart rewards",
    status: "completed",
  },
  {
    phase: "Q3 2024",
    title: "DAO Governance",
    description: "Decentralized voting, proposal system, community treasury",
    status: "current",
  },
  {
    phase: "Q4 2024",
    title: "Marketplace Integration",
    description: "NFT rewards, cross-platform features, mobile app",
    status: "upcoming",
  },
];

export const problems = [
  {
    icon: TrendingUp,
    text: "No reliable way to measure real activity—fake engagement goes unnoticed",
  },
  { icon: Users, text: "Valuable contributors are buried in noise and spam" },
  {
    icon: MessageSquare,
    text: "Community sentiment is invisible without analytics",
  },
  { icon: Zap, text: "Twitter raids are chaotic and rewardless" },
  { icon: Shield, text: "FUD and scams thrive when admins are offline" },
  { icon: Bot, text: "Centralized moderation is ineffective at scale" },
];

export const solutions = [
  {
    icon: CheckCircle,
    text: "Transparent metrics: every message, tweet, and reaction tracked",
  },
  { icon: Trophy, text: "Leaderboards highlight real contributors" },
  {
    icon: TrendingUp,
    text: "Real-time sentiment analysis and health scores",
  },
  { icon: Zap, text: "Automated raid tracking and rewards" },
  {
    icon: Shield,
    text: "AI moderation tools and community-powered reporting",
  },
  {
    icon: Users,
    text: "Scalable, decentralized governance with fair participation",
  },
];

export const features = [
  {
    title: "AI-Scored Contests",
    description:
      "Reward users for quality engagement with VBZ tokens—automatically.",
    icon: Trophy,
  },
  {
    title: "Community Moderation",
    description:
      "/report toxic users. After 10 reports, auto-mute kicks in—with DM appeals.",
    icon: Shield,
  },
  {
    title: "Sentiment Analytics",
    description:
      "Is your group bullish or bearish? Get real-time morale indicators.",
    icon: TrendingUp,
  },
  {
    title: "Mini App Dashboard",
    description:
      "Track group activity, leaderboard stats, and raid participation in one place.",
    icon: MessageSquare,
  },
  {
    title: "Cross-Platform Twitter Sync",
    description:
      "Track Twitter raids and reward actual contributors—no spreadsheet needed.",
    icon: Zap,
  },
  {
    title: "Anti-FUD & Spam Protection",
    description:
      "AI tools prevent scams and explicit content, even when admins sleep.",
    icon: Bot,
  },
  {
    title: "Gamified Engagement",
    description:
      "Weekly contests, sticker challenges, and more—built to energize communities.",
    icon: Users,
  },
  {
    title: "Public Trending Hub",
    description:
      "See the most active and bullish Telegram groups across Web3, live.",
    icon: TrendingUp,
  },
];

export const personas = [
  {
    id: "dick",
    name: "Dick Johnson",
    style: "Roastful, edgy, offensive",
    purpose: "Wake up chats, kill FUD, and flame lurkers.",
    color: "red",
    avatar: Dick,
  },
  {
    id: "sunny",
    name: "Sunny Sam",
    style: "Warm, friendly, kind",
    purpose: "Encourage newcomers, celebrate wins, boost morale.",
    color: "yellow",
    avatar: Sam,
  },
  {
    id: "karen",
    name: "Karen Beetch",
    style: "Sassy, chaotic, complaining bitch",
    purpose: "Stir drama, keep things spicy, roast with flair.",
    color: "pink",
    avatar: Karan,
  },
  {
    id: "bob",
    name: "Diamond Balls Bob",
    style: "Bullish, positive, diamond-handed",
    purpose: "Lead raids, boost confidence, and inspire conviction.",
    color: "blue",
    avatar: Diamond,
  },
];

export const thePersonas = [
  {
    name: "Dick Johnson",
    alias: "The Roast Master",
    tone: "Sharp, witty, unapologetically savage",
    behavior:
      "Dick Johnson is the default no-nonsense enforcer. He calls out lazy lurkers, drops nuclear roasts, and shows no mercy. Think Gordon Ramsay meets Crypto Twitter.",
    personalty:
      "Edgy, fearless, and proudly offensive, he doesn't hold back. Perfect for communities that thrive on banter and thick skin.",
    bestFor: [
      "Reviving dead chats",
      "Killing FUD",
      "Keeping users on their toes",
    ],
    whenToUse:
      "Dick is the sparkplug every degen chat needs when things get too tame. No slacking. No mercy. Just vibes and verbal bar fights.",
    color: "red",
    avatar: Dick,
  },
  {
    name: "Sunny Sam",
    alias: "The Good Vibes Chadette",
    tone: "Warm, positive, and supportive",
    personalty:
      "She's like sunshine in a sideways market—kind, consistent, and always down to say “WAGMI.” A great onboarding tool for new members.",
    behavior:
      "Sunny Sam spreads good vibes and encouragement. She celebrates contributions, motivates the group, and makes everyone feel seen and appreciated.",
    bestFor: [
      "Uplifting the mood",
      "Welcoming newcomers",
      "Encouraging participation",
    ],
    whenToUse:
      "Sunny Sam keeps morale high and toxicity low—your go-to when community love is needed more than memes.",
    color: "yellow",
    avatar: Sam,
  },
  {
    name: "Karen Beetch",
    alias: "The Drama Queen",
    tone: "Sassy, dramatic, and unapologetically rude",
    personalty:
      "She's bold, dramatic, and chaotic-good. Karen Beetch thrives on attention and keeping the chat spicy.",
    behavior:
      "Karen Beetch doesn't just join the chat—she storms in. She throws shade, starts chaos, and roasts with flair. She's not nice. She's that bitch.",
    bestFor: [
      "Stirring up boring chats",
      "Meme battles and banter",
      "Starting drama (for fun)",
    ],
    whenToUse:
      "When your group's a little too quiet or needs a laugh, Karen keeps it rude, wild, and dangerously fun.",
    color: "pink",
    avatar: Karan,
  },
  {
    name: "Diamond Balls Bob",
    alias: "The Hype Whale",
    tone: "Confident, bullish, motivational",
    personalty:
      "Think: the wealthiest guy in the chat who still hypes everyone else up. Bob's always bullish, never bearish.",
    behavior:
      "Bob talks like every candle is green and every dip is a discount. He's the community's hype beast.",
    bestFor: [
      "Twitter raids",
      "Rallying the troops",
      "Generating market momentum",
    ],
    whenToUse:
      "When it's time to raid or rally, Bob brings the thunder. His vibes are pure green candles and rocket fuel.",
    color: "blue",
    avatar: Diamond,
  },
];
