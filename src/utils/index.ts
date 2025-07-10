import {
  CheckCircle,
  Bot,
  TrendingUp,
  Shield,
  Users,
  Zap,
  MessageSquare,
  Trophy,
  HeartPulse,
  Activity,
} from "lucide-react";
import { TbPresentationAnalytics } from "react-icons/tb";

import Dick from "@/assets/personas/dick.svg";
import Sam from "@/assets/personas/sunny.svg";
import Diamond from "@/assets/personas/diamond.svg";
import Karan from "@/assets/personas/karan.svg";
import Founder from "@/assets/founder.jpg";
import Ruben from "@/assets/rubes.jpg";
import Mythic from "@/assets/mytic.jpg";
import Luke from "@/assets/Luke.jpg";
import Aws from "@/assets/aws.png";
import grok from "@/assets/grok.png";
import openai from "@/assets/openai.png";

export const teamMembers = [
  {
    name: "Killian",
    role: "Founder & CEO",
    image: Founder,
  },
  {
    name: "Rube",
    role: "Lead Developer",
    image: Ruben,
  },
  {
    name: "Mythic",
    role: "Chief of Community",
    image: Mythic,
  },
  {
    name: "Luke",
    role: "Chief of Marketing",
    image: Luke,
  },
];

export const partnerships = [
  { name: "Openai", logo: openai },
  { name: "grok", logo: grok },
  { name: "aws", logo: Aws },
];

export const roadmapItems = [
  {
    phase: "Phase 1",
    title: "MVP & Core Tracking System",
    description:
      "Building foundational tracking, moderation, and gamification tools.",
    status: "completed",
  },
  {
    phase: "Phase 2",
    title: "Automation & Advanced Analytics",
    description:
      "Automate moderation and sentiment analytics, enhance visibility using AI.",
    status: "completed",
  },
  {
    phase: "Phase 3",
    title: "AI Moderation & Smart Rewards",
    description:
      "Deploy intelligent moderation tools and advanced reward mechanisms.",
    status: "current",
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
    title: "Data Analysis",
    description:
      "Vibezly monitors your Telegram community, analyzes chat behavior, and gathers data for research purposes.",
    icon: TbPresentationAnalytics,
  },
  {
    title: "Sentiment Analytics",
    description:
      "Is your group bullish or bearish? Get real-time morale indicators.",
    icon: TrendingUp,
  },
  {
    title: "Sleek Dapp",
    description:
      "Track group activity, leaderboard stats, and raid participation in one place.",
    icon: MessageSquare,
  },
  {
    title: "Tweet Drop Detection",
    description:
      "Anaylse which memebers are dropping tweets to raid in the community",
    icon: Activity,
  },
  {
    title: "Community Health Scores",
    description:
      "Vibezly will examine the overall health of your community by detecting spam and sentiment.",
    icon: HeartPulse,
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

export const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "MVP & Core Tracking System",
    objective:
      "Build foundational tracking, moderation, and gamification tools.",
    status: "completed",
    // features: [
    //   {
    //     name: "Message Tracking",
    //     description:
    //       "Tracks all Telegram group messages including stickers, GIFs, and spam.",
    //   },
    //   {
    //     name: "Tweet Logging",
    //     description:
    //       "Logs all tweets shared in group chats directly to the database.",
    //   },
    //   {
    //     name: "Mini App Leaderboard",
    //     description:
    //       "Displays real-time group engagement rankings and trending metrics.",
    //   },
    //   {
    //     name: "Dynamic Personas",
    //     description: "Includes 4 core personas with unique tones and styles.",
    //   },
    //   {
    //     name: "Flood Protection",
    //     description: "Message rate limiter to prevent spam floods.",
    //   },
    //   {
    //     name: "Trending Score",
    //     description: "Calculates group score based on engagement minus spam.",
    //   },
    //   {
    //     name: "User Rating System",
    //     description:
    //       "/report command with auto-mute after 10 reports + DM-based appeal system.",
    //   },
    //   {
    //     name: "User Filters",
    //     description:
    //       "Tracks per-user message volume, stickers, GIFs, and spam behavior.",
    //   },
    //   {
    //     name: "Sentiment Reports",
    //     description:
    //       "Weekly/monthly manual reports on overall group sentiment.",
    //   },
    //   {
    //     name: "Contest System",
    //     description:
    //       "Auto-run contests with leaderboard visibility and direct token payouts.",
    //   },
    // ],

    features: [
      {
        name: "Message & Tweet Tracking",
        message:
          "Tracks all Telegram group messages and logs shared tweets to the database.",
        status: "complete",
      },
      {
        name: "Dynamic AI Personas",
        message: "Includes 4 core personas with unique tones and styles.",
        status: "complete",
      },
      {
        name: "Persona Switching",
        message:
          "Admins can change personas on-the-fly based on community mood or context.",
        status: "complete",
      },
      {
        name: "Vibezly Community Trending",
        message: "Track trending topics within the Vibezly community",
        status: "complete",
      },
      {
        name: "Community Public Profiles",
        message: "Public profile pages for communities",
        status: "complete",
      },
      {
        name: "Mini-App Dashboard",
        message: "Dashboard for mini-app management",
        status: "complete",
      },
      {
        name: "Gamified Engagement & Contests",
        message: "Gamification features and contest creation tools",
        status: "complete",
      },
      {
        name: "Sentiment Analysis & Reporting",
        message: "Weekly/monthly manual reports on overall group sentiment.",
        status: "complete",
      },
      {
        name: "Tweet Drop Detection",
        message: "Detect high-impact tweet activity in communities",
        status: "complete",
      },
      {
        name: "Community Health Scores",
        message: "Score communities based on engagement and behavior",
        status: "complete",
      },
      {
        name: "Trending Score",
        message: "Calculates group score based on engagement minus spam",
        status: "complete",
      },
      {
        name: "User report and notification to admins",
        message: "Enable users to report content to admins with alerts",
        status: "pending",
      },
      {
        name: "Anti-Spam (Flood Protection) & Moderation Tools",
        message: "Message rate limiter to prevent spam floods.",
        status: "pending",
      },
      {
        name: "X Integration",
        message: "Integrate features directly with X (formerly Twitter)",
        status: "pending",
      },
    ],
  },
  {
    phase: "Phase 2",
    title: "Automation & Advanced Analytics",
    objective:
      "Automate moderation and sentiment analytics, enhance visibility using AI.",
    status: "current",
    // features: [
    //   {
    //     name: "Sentiment Automation",
    //     description:
    //       "Scheduled AI-generated sentiment reports per user and group.",
    //   },
    //   {
    //     name: "User Behavior Tagging",
    //     description:
    //       "AI labels users as spammy, toxic, influential, etc., for mod visibility.",
    //   },
    //   {
    //     name: "Public Profiles",
    //     description:
    //       "Generates user profile cards with activity stats for transparency.",
    //   },
    //   {
    //     name: "Persona Switching",
    //     description:
    //       "Admins can change personas on-the-fly based on community mood or context.",
    //   },
    //   {
    //     name: "Emoji & Reaction Tracking",
    //     description: "Tracks usage of reactions to measure passive engagement.",
    //   },
    //   {
    //     name: "API Integration",
    //     description:
    //       "Live token data and charts via third-party APIs (e.g., DexScreener).",
    //   },
    //   {
    //     name: "Wallet Integration",
    //     description:
    //       "Connect wallet to unlock premium bot features based on token holdings.",
    //   },
    // ],

    features: [
      {
        name: "DApp dashboard page and advanced search",
        message:
          "Full-featured DApp dashboard with advanced search capabilities",
        status: "pending",
      },
      {
        name: "Premium Upvoting",
        message: "Premium users can upvote content with greater impact",
        status: "pending",
      },
      {
        name: "Vibezly Premium Data",
        message: "Exclusive data insights for premium users",
        status: "pending",
      },
      {
        name: "Chart & Price Tracking Integration",
        message: "Track token prices and market charts",
        status: "pending",
      },
      {
        name: "Wallet Connect / Token-Gated Tools",
        message:
          "Connect wallet to unlock premium bot features based on token holdings.",
        status: "pending",
      },
      {
        name: "Third-Party Token Integration",
        message:
          "Live token data and charts via third-party APIs (e.g., DexScreener).",
        status: "pending",
      },
      {
        name: "User Public Profiles",
        message:
          "Generates user profile cards with activity stats for transparency.",
        status: "pending",
      },
      {
        name: "Telegram Trending Channel",
        message: "Highlight trending content via Telegram bot",
        status: "pending",
      },
      {
        name: "Emoji & Reaction Tracking",
        message: "Tracks usage of reactions to measure passive engagement.",
        status: "pending",
      },
      {
        name: "Community Admin Verification Tool",
        message: "Verify and manage official community admin roles",
        status: "pending",
      },
      {
        name: "Scaling DApp And Bot",
        message: "Scale the DApp and bot architecture for broader usage",
        status: "pending",
      },
    ],
  },
  {
    phase: "Phase 3",
    title: "AI Moderation & Smart Rewards",
    objective:
      "Deploy intelligent moderation tools and advanced reward mechanisms.",
    status: "upcoming",
    // features: [
    //   {
    //     name: "AI Moderation",
    //     description:
    //       "NLP-based detection of spam, floods, and abusive patterns.",
    //   },
    //   {
    //     name: "AI Persona Responses",
    //     description:
    //       "Context-aware replies from personas tailored to group conversations.",
    //   },
    //   {
    //     name: "Third-Party Token Integration",
    //     description:
    //       "Allow other projects to plug in their token for contests and utilities.",
    //   },
    // ],

    features: [
      {
        name: "AI Moderation & Smart Rewards",
        message: "NLP-based detection of spam, floods, and abusive patterns.",
        status: "pending",
      },
      {
        name: "AI Automated Persona Responses",
        message:
          "Context-aware replies from personas tailored to group conversations.",
        status: "pending",
      },
      {
        name: "Vibezly Marketing Platform",
        message: "Marketing tools and platform for community growth",
        status: "pending",
      },
      {
        name: "Vibezly Data Hub",
        message: "Centralized hub for all Vibezly analytics and insights",
        status: "pending",
      },
      {
        name: "Public API Release for Vibezly Integrations",
        message: "Release of public APIs to enable third-party integrations",
        status: "pending",
      },
    ],
  },
];
