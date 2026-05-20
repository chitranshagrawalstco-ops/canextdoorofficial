import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  TrendingUp, 
  Calendar, 
  Award, 
  Flame, 
  Zap, 
  BarChart2, 
  CheckCircle, 
  Clock, 
  ArrowRight, 
  ChevronRight, 
  Download, 
  Play, 
  Users, 
  Layers, 
  Shield, 
  Star, 
  Sparkles, 
  Menu, 
  X, 
  ChevronDown, 
  Check, 
  Activity, 
  FileText, 
  Brain,
  MessageSquare,
  Bookmark,
  Bell,
  Cpu,
  Target,
  Eye
} from 'lucide-react';

const demoVideos = [
  {
    id: 'install',
    title: 'How to download and install app',
    url: 'https://www.youtube.com/embed/OHou4aGwUN0',
    duration: '3:45',
    badge: 'Getting Started',
    icon: Download,
    description: 'Learn how to easily download and install the CA Next Door application on your local device.'
  },
  {
    id: 'syllabus',
    title: 'How to download subject and chapters',
    url: 'https://www.youtube.com/embed/SjkB3_nILLA',
    duration: '4:20',
    badge: 'Database Setup',
    icon: BookOpen,
    description: 'Master the syllabus importing system to quickly set up your study targets and milestones.'
  },
  {
    id: 'usage',
    title: 'How to use CA Next Door App',
    url: null, // coming soon
    duration: 'Coming Soon',
    badge: 'Walkthrough',
    icon: Sparkles,
    description: 'Deep dive into the operational spacing engine, active revision plans, and error register analytics.'
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [revisionTopic, setRevisionTopic] = useState('Financial Reporting - Consolidation');
  const [scheduledRevisions, setScheduledRevisions] = useState([]);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [selectedDemoVideoId, setSelectedDemoVideoId] = useState('install');
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [revisionVisualMode, setRevisionVisualMode] = useState('screenshot');
  const [mistakeVisualMode, setMistakeVisualMode] = useState('heatmap');
  const [showResourcesToast, setShowResourcesToast] = useState(false);

  const triggerResourcesToast = () => {
    setShowResourcesToast(true);
    setTimeout(() => {
      setShowResourcesToast(false);
    }, 4000);
  };

  // Time remaining to CA Exams
  const [timeLeft, setTimeLeft] = useState({ days: 120, hours: 14, minutes: 32, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Revision auto scheduler
  const handleScheduleRevision = (e) => {
    e.preventDefault();
    if (!revisionTopic.trim()) return;

    const today = new Date();
    const addDays = (date, days) => {
      const result = new Date(date);
      result.setDate(result.getDate() + days);
      return result.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    const newSchedule = {
      id: Date.now(),
      topic: revisionTopic,
      rev1: addDays(today, 1),
      rev2: addDays(today, 7),
      rev3: addDays(today, 21),
    };

    setScheduledRevisions([newSchedule, ...scheduledRevisions.slice(0, 2)]);
    setRevisionTopic('');
  };

  // Prepopulate one revision
  useEffect(() => {
    const today = new Date();
    const addDays = (date, days) => {
      const result = new Date(date);
      result.setDate(result.getDate() + days);
      return result.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };
    setScheduledRevisions([
      {
        id: 1,
        topic: 'FR - Ind AS 115 (Revenue)',
        rev1: addDays(today, 1),
        rev2: addDays(today, 7),
        rev3: addDays(today, 21)
      }
    ]);
  }, []);

  const featuresList = [
    {
      id: 'dashboard',
      title: 'Smart Dashboard',
      desc: 'All study metrics, revision queues, and daily target completions visualized in a beautiful, distraction-free command center.',
      icon: Layers,
      color: 'from-indigo-500 to-violet-500',
      badge: 'Core UI',
      preview: (
        <div className="space-y-2 text-xs">
          <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-slate-500 font-medium">Daily Study Target</span>
            <span className="text-indigo-600 font-bold">6.2 / 8 hrs</span>
          </div>
          <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-slate-500 font-medium">Current Streak</span>
            <span className="text-orange-600 font-extrabold flex items-center gap-1">24 Days <Flame size={12} className="fill-orange-600" /></span>
          </div>
        </div>
      )
    },
    {
      id: 'syllabus',
      title: 'Syllabus Tracker',
      desc: 'Granular tracking down to chapter and concepts for FR, AFM, Audit, DT, and IDT with progress metrics built for CA Aspirant syllabus weightage.',
      icon: BookOpen,
      color: 'from-sky-500 to-indigo-500',
      badge: 'Comprehensive',
      preview: (
        <div className="space-y-2 text-xs">
          <div className="w-full bg-white h-4 rounded-full overflow-hidden border border-black p-0.5 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
            <div className="bg-indigo-600 h-full rounded-full" style={{ width: '72%' }} />
          </div>
          <div className="flex justify-between text-[10px] text-slate-500 font-bold">
            <span>Syllabus Completion</span>
            <span className="text-slate-900 font-black">72% Completed</span>
          </div>
        </div>
      )
    },
    {
      id: 'revision',
      title: 'Advanced Revision Engine',
      desc: 'Systematic review scheduling. Automatically calculates and triggers first, second, and third revision rounds timed perfectly before your exam date.',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500',
      badge: 'Revision Scheduling',
      preview: (
        <div className="space-y-2 text-xs">
          <div className="flex justify-between items-center bg-white p-1.5 px-2 rounded-lg border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-slate-800 font-bold text-[10px]">FR Consolidation</span>
            <span className="bg-indigo-50 text-indigo-700 border border-indigo-200 px-1.5 py-0.5 rounded text-[8px] font-black">Rev 1: Today</span>
          </div>
          <div className="flex justify-between items-center bg-white p-1.5 px-2 rounded-lg border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-slate-400 text-[10px]">AFM Portfolio</span>
            <span className="bg-slate-100 text-slate-500 border border-slate-200 px-1.5 py-0.5 rounded text-[8px] font-black">Rev 2: In 3 Days</span>
          </div>
        </div>
      )
    },
    {
      id: 'planner',
      title: 'Dynamic Task Planner',
      desc: 'Block study slots, manage backlogs, and plan daily checklists. Automatically adjusts schedules when you skip a target to avoid overwhelm.',
      icon: Calendar,
      color: 'from-emerald-500 to-teal-500',
      badge: 'Dynamic',
      preview: (
        <div className="space-y-1.5 text-xs">
          <div className="flex items-center gap-2 text-slate-500">
            <input type="checkbox" defaultChecked className="rounded border border-black text-indigo-600 focus:ring-indigo-500 w-3.5 h-3.5" />
            <span className="line-through text-slate-400 text-[10px] font-semibold">Ind AS 103 Practice Qs</span>
          </div>
          <div className="flex items-center gap-2 text-slate-800">
            <input type="checkbox" className="rounded border border-black text-indigo-600 focus:ring-indigo-500 w-3.5 h-3.5" />
            <span className="text-[10px] font-bold">Audit Standards Review</span>
          </div>
        </div>
      )
    },
    {
      id: 'milestones',
      title: 'Goals & Milestones',
      desc: 'Establish clear milestone goals like completing 1st reading, solving past year papers (RTPs/MTPs), and tracking test schedules.',
      icon: Target,
      color: 'from-orange-500 to-amber-500',
      badge: 'Goal-Oriented',
      preview: (
        <div className="space-y-1.5 text-xs text-[9px]">
          <div className="flex justify-between items-center bg-white px-2 py-1 border border-black rounded-lg shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-slate-800 font-bold">Solve May 2025 Past Paper</span>
            <span className="text-amber-700 font-extrabold bg-amber-50 px-1 py-0.5 rounded border border-amber-200">Pending</span>
          </div>
          <div className="flex justify-between items-center bg-white px-2 py-1 border border-black rounded-lg shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-slate-800 font-bold">SA 500 Standards Series</span>
            <span className="text-emerald-700 font-extrabold bg-emerald-50 px-1 py-0.5 rounded border border-emerald-200">Passed</span>
          </div>
        </div>
      )
    },
    {
      id: 'analytics',
      title: 'Test Analytics',
      desc: 'Log mockup and test scores. Analyze strengths and weak subject chapters, identifying areas requiring immediate secondary reading.',
      icon: BarChart2,
      color: 'from-rose-500 to-red-500',
      badge: 'Deep Analytics',
      preview: (
        <div className="flex items-end gap-2.5 h-10 pt-2 justify-center bg-white border border-black rounded-xl p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <div className="w-3 bg-indigo-200 h-5 rounded-t border border-black" />
          <div className="w-3 bg-indigo-300 h-8 rounded-t border border-black" />
          <div className="w-3 bg-indigo-400 h-6 rounded-t border border-black" />
          <div className="w-3 bg-indigo-600 h-10 rounded-t border border-black" />
        </div>
      )
    },
    {
      id: 'vault',
      title: 'Material Vault',
      desc: 'Keep all standard study resources, ICAI publications, RTPs, MTPs, and question banks structured in one hyper-linked database.',
      icon: Bookmark,
      color: 'from-indigo-500 to-violet-500',
      badge: 'Organization',
      preview: (
        <div className="grid grid-cols-2 gap-1.5 text-[9px] text-slate-800">
          <div className="bg-white p-1 rounded-lg border border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] text-center font-bold">ICAI SM 2026</div>
          <div className="bg-white p-1 rounded-lg border border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] text-center font-bold">RTP May 2026</div>
        </div>
      )
    },
    {
      id: 'notes',
      title: 'Notes & LDR Manager',
      desc: 'Organize your Last Day Revision (LDR) summaries, essential formulas, and core section codes to quickly review on exam eve.',
      icon: FileText,
      color: 'from-amber-500 to-yellow-500',
      badge: 'Exam Eve Focus',
      preview: (
        <div className="space-y-1 text-[10px] text-slate-800">
          <div className="bg-amber-50 border border-black p-1.5 rounded-lg text-amber-900 font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            ⚠️ Ind AS 110: Consolidation steps
          </div>
        </div>
      )
    },
    {
      id: 'streaks',
      title: 'Study Streaks',
      desc: 'Build continuous discipline. Watch your streak count grow day by day, protecting it from breaking with study buddy check-ins.',
      icon: Flame,
      color: 'from-orange-500 to-rose-500',
      badge: 'Gamification',
      preview: (
        <div className="flex justify-center items-center gap-2 bg-white border border-black rounded-xl py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <div className="bg-orange-50 p-1 rounded-full border border-orange-200 text-orange-600">
            <Flame size={12} className="fill-orange-500" />
          </div>
          <span className="text-xs font-black text-slate-800">24 Days</span>
        </div>
      )
    },
    {
      id: 'resources',
      title: 'Resource Manager',
      desc: 'Manage study trackers, planner widgets, and class logs in one unified resource list to completely isolate and eliminate planning overhead.',
      icon: Cpu,
      color: 'from-sky-500 to-indigo-500',
      badge: 'Systematic',
      preview: (
        <div className="flex gap-1.5 text-[9px] text-slate-700 justify-center">
          <span className="bg-white border border-black px-1.5 py-0.5 rounded-lg font-bold shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">Classes: 100%</span>
          <span className="bg-white border border-black px-1.5 py-0.5 rounded-lg font-bold shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">Planner: Active</span>
        </div>
      )
    }
  ];

  const workflowSteps = [
    {
      title: 'Plan Syllabus',
      desc: 'Map the complete syllabus of FR, AFM, Audit, DT, and IDT, establishing modular milestones and completion dates based on historical paper weightage.',
      tag: 'Step 1',
      bullets: [
        'Select target exam attempt (May/Nov)',
        'Weightage-based planning logic',
        'Auto-assigned chapter deadlines'
      ]
    },
    {
      title: 'Study Daily targets',
      desc: 'Execute structured daily study blocks using our highly focused smart planner widgets. Log study hours and task checklist completions without friction.',
      tag: 'Step 2',
      bullets: [
        'One-click task status updates',
        'Deep Work countdown timer',
        'Distraction-free checklist view'
      ]
    },
    {
      title: 'Systematic Review Cycles',
      desc: 'Let our algorithm auto-schedule your 1st, 2nd, and 3rd revision slots, making sure you hit every core standard and code repeatedly before the exam.',
      tag: 'Step 3',
      bullets: [
        '3-tier revision scheduler',
        'Spaced repetition algorithms',
        'Flagged review checklist items'
      ]
    },
    {
      title: 'Take Mock Tests',
      desc: 'Conduct simulated tests under actual ICAI conditions. Log your scores in our database to analyze consistency and pinpoint specific weak chapters.',
      tag: 'Step 4',
      bullets: [
        'Simulated timed test sessions',
        'Section-by-section scoring logs',
        'Detailed performance analytics'
      ]
    },
    {
      title: 'Track Performance & Analytics',
      desc: 'Observe historical score trendlines, subject-wise readiness indicators, and average weekly study hours in gorgeous startup-style graphs.',
      tag: 'Step 5',
      bullets: [
        'Subject-by-subject readiness levels',
        'Weekly study target statistics',
        'Streak tracking and log records'
      ]
    },
    {
      title: 'Iterate & Secure Rank',
      desc: 'Address specific study gaps, revise highlighted weak topics, protect your study streaks, and walk into the examination hall with total confidence.',
      tag: 'Step 6',
      bullets: [
        'Personalized gap analysis',
        'Focused weak-topic reviews',
        'High-confidence exam-prep dashboard'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Chitransh',
      role: 'CA Student',
      color: 'bg-indigo-600 text-white',
      stat: '92% Revision Consistency',
      text: 'CA Next Door changed how I structured my preparation. I used to schedule revisions on spreadsheets which kept breaking. The automated Review Scheduler generated revision rounds automatically, saving me at least 40+ planning hours.',
      metric: '+45h Logged Study'
    },
    {
      name: 'Yashashvi',
      role: 'CA Student',
      color: 'bg-rose-500 text-white',
      stat: 'Reduced Backlog by 78%',
      text: 'The dynamic backlog planner is magical. When I missed targets due to audits or college, it automatically redistributed the pending topics across the upcoming week instead of stressing me out with an impossible mountain.',
      metric: '720h Total Study Tracked'
    },
    {
      name: 'Maanvi',
      role: 'CA Student',
      color: 'bg-amber-400 text-slate-900',
      stat: '+32% Mock Test Growth',
      text: 'The weak chapter detection is scary accurate. It pointed out that my consolidation accounting standards were causing my scores to drop in test series. Focused revisions on those specific chapters boosted my exam confidence.',
      metric: '92% Accuracy Focus'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-slate-600 overflow-x-hidden font-sans relative">
      
      {/* BACKGROUND ORBS & PATTERNS */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0 opacity-60" />
      
      {/* Animated Minimalist Drifting Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-indigo-400/5 blur-[120px] animate-drift-1" />
        <div className="absolute top-[35%] right-[-20%] w-[50vw] h-[50vw] rounded-full bg-sky-300/5 blur-[120px] animate-drift-2" />
        <div className="absolute bottom-[10%] left-[-15%] w-[55vw] h-[55vw] rounded-full bg-violet-400/5 blur-[130px] animate-drift-3" />
      </div>

      {/* Subtle Drifting Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[15%] left-[10%] opacity-20 animate-drift-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-indigo-400">
            <circle cx="12" cy="12" r="8" />
          </svg>
        </div>
        <div className="absolute top-[45%] right-[15%] opacity-25 animate-drift-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-400">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
        <div className="absolute top-[75%] left-[8%] opacity-15 animate-drift-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-violet-400">
            <path d="M12 3L2 22h20L12 3z" />
          </svg>
        </div>
      </div>

      {/* Dynamic Animated Flowing Waves & Repeating Wave Lines distributed down the whole page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* Wave Group 1: Near Top (Hero & Stats) */}
        <div className="absolute top-[180px] left-0 h-[220px] w-[5760px] opacity-20 animate-wave-fast">
          <svg className="w-full h-full text-indigo-500" viewBox="0 0 2880 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,100 Q180,30 360,100 T720,100 T1080,100 T1440,100 T1800,100 T2160,100 T2520,100 T2880,100" stroke="currentColor" strokeWidth="2.5" strokeDasharray="8 6" />
          </svg>
        </div>
        <div className="absolute top-[260px] left-0 h-[220px] w-[5760px] opacity-15 animate-wave-medium" style={{ animationDirection: 'reverse' }}>
          <svg className="w-full h-full text-sky-400" viewBox="0 0 2880 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,100 Q180,170 360,100 T720,100 T1080,100 T1440,100 T1800,100 T2160,100 T2520,100 T2880,100" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="absolute top-[120px] left-0 h-[220px] w-[5760px] opacity-[0.12] animate-wave-slow">
          <svg className="w-full h-full text-violet-400" viewBox="0 0 2880 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,100 Q180,130 360,100 T720,100 T1080,100 T1440,100 T1800,100 T2160,100 T2520,100 T2880,100" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </div>

        {/* Wave Group 2: Mid-Upper (Features Section, around 1500px) */}
        <div className="absolute top-[1500px] left-0 h-[220px] w-[5760px] opacity-12 animate-wave-fast" style={{ animationDirection: 'reverse' }}>
          <svg className="w-full h-full text-indigo-400" viewBox="0 0 2880 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,100 Q180,60 360,100 T720,100 T1080,100 T1440,100 T1800,100 T2160,100 T2520,100 T2880,100" stroke="currentColor" strokeWidth="2" strokeDasharray="12 8" />
          </svg>
        </div>
        <div className="absolute top-[1620px] left-0 h-[220px] w-[5760px] opacity-10 animate-wave-medium">
          <svg className="w-full h-full text-violet-400" viewBox="0 0 2880 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,100 Q180,140 360,100 T720,100 T1080,100 T1440,100 T1800,100 T2160,100 T2520,100 T2880,100" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        {/* Wave Group 3: Mid-Lower (Revision & Mistake Book, around 3200px) */}
        <div className="absolute top-[3100px] left-0 h-[220px] w-[5760px] opacity-15 animate-wave-fast">
          <svg className="w-full h-full text-indigo-500" viewBox="0 0 2880 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,100 Q180,40 360,100 T720,100 T1080,100 T1440,100 T1800,100 T2160,100 T2520,100 T2880,100" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" />
          </svg>
        </div>
        <div className="absolute top-[3200px] left-0 h-[220px] w-[5760px] opacity-12 animate-wave-medium" style={{ animationDirection: 'reverse' }}>
          <svg className="w-full h-full text-sky-400" viewBox="0 0 2880 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,100 Q180,160 360,100 T720,100 T1080,100 T1440,100 T1800,100 T2160,100 T2520,100 T2880,100" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Wave Group 4: Lower-Middle (Workflow & Testimonials, around 4700px) */}
        <div className="absolute top-[4700px] left-0 h-[220px] w-[5760px] opacity-12 animate-wave-fast" style={{ animationDirection: 'reverse' }}>
          <svg className="w-full h-full text-indigo-400" viewBox="0 0 2880 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,100 Q180,50 360,100 T720,100 T1080,100 T1440,100 T1800,100 T2160,100 T2520,100 T2880,100" stroke="currentColor" strokeWidth="2.2" strokeDasharray="10 6" />
          </svg>
        </div>
        <div className="absolute top-[4800px] left-0 h-[220px] w-[5760px] opacity-10 animate-wave-slow">
          <svg className="w-full h-full text-violet-400" viewBox="0 0 2880 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,100 Q180,120 360,100 T720,100 T1080,100 T1440,100 T1800,100 T2160,100 T2520,100 T2880,100" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </div>

        {/* Wave Group 5: Near Bottom (Pricing & Footer, around 5900px) */}
        <div className="absolute top-[5900px] left-0 h-[220px] w-[5760px] opacity-15 animate-wave-fast">
          <svg className="w-full h-full text-indigo-500" viewBox="0 0 2880 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,100 Q180,30 360,100 T720,100 T1080,100 T1440,100 T1800,100 T2160,100 T2520,100 T2880,100" stroke="currentColor" strokeWidth="2.5" strokeDasharray="8 6" />
          </svg>
        </div>
        <div className="absolute top-[6000px] left-0 h-[220px] w-[5760px] opacity-12 animate-wave-medium" style={{ animationDirection: 'reverse' }}>
          <svg className="w-full h-full text-sky-400" viewBox="0 0 2880 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,100 Q180,170 360,100 T720,100 T1080,100 T1440,100 T1800,100 T2160,100 T2520,100 T2880,100" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-black px-6 py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="CA Next Door Logo" 
              className="w-9 h-9 object-contain"
            />
            <span className="font-extrabold text-xl tracking-tight text-white">
              CA Next Door
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-extrabold">
            <a href="#features" className="text-slate-300 hover:text-indigo-400 transition-colors">Features</a>
            <a href="#revision" className="text-slate-300 hover:text-indigo-400 transition-colors">Revision Engine</a>
            <a href="#workflow" className="text-slate-300 hover:text-indigo-400 transition-colors">Workflow</a>
            <a href="#why" className="text-slate-300 hover:text-indigo-400 transition-colors">Testimonials</a>
            <button 
              onClick={triggerResourcesToast}
              className="text-slate-300 hover:text-indigo-400 transition-colors flex items-center gap-1.5 focus:outline-none"
            >
              <span>Resources</span>
              <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 scale-90 tracking-wider">
                Soon
              </span>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setShowDemoModal(true)}
              className="px-5 py-2.5 text-sm font-extrabold bg-slate-800 border border-black text-slate-200 hover:bg-slate-700/60 hover:text-white rounded-xl shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
            >
              Watch Demo
            </button>
            <a 
              href="https://t.me/canextdoorofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-extrabold bg-indigo-600 border border-black text-white rounded-xl shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-2"
            >
              <Download size={15} /> Download App
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-slate-950 border border-black rounded-2xl overflow-hidden px-5 py-6 space-y-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.12)] text-white"
            >
              <a 
                href="#features" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-indigo-400 font-extrabold py-2 border-b border-slate-800"
              >
                Features
              </a>
              <a 
                href="#revision" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-indigo-400 font-extrabold py-2 border-b border-slate-800"
              >
                Revision Engine
              </a>
              <a 
                href="#workflow" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-indigo-400 font-extrabold py-2 border-b border-slate-800"
              >
                Workflow
              </a>
              <a 
                href="#why" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-indigo-400 font-extrabold py-2 border-b border-slate-800"
              >
                Testimonials
              </a>
              <button 
                onClick={() => { setMobileMenuOpen(false); triggerResourcesToast(); }}
                className="w-full text-left text-slate-300 hover:text-indigo-400 font-extrabold py-2 flex items-center justify-between focus:outline-none"
              >
                <span>Resources</span>
                <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 tracking-wider scale-90">
                  Soon
                </span>
              </button>
              
              <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
                <button 
                  onClick={() => { setMobileMenuOpen(false); setShowDemoModal(true); }}
                  className="w-full py-2.5 text-center font-extrabold bg-slate-800 border border-black text-slate-200 hover:bg-slate-700 hover:text-white rounded-xl shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                >
                  Watch Demo
                </button>
                <a 
                  href="https://t.me/canextdoorofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 text-center font-extrabold bg-indigo-600 border border-black text-white rounded-xl shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center gap-2"
                >
                  <Download size={15} /> Download App
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-24 px-6 md:px-12 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-black rounded-full px-4 py-1.5 text-xs text-indigo-850 font-bold mx-auto lg:mx-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles size={12} className="fill-indigo-850 text-indigo-850 animate-pulse" /> Premium Syllabus Retention System for CA Aspirants
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Prepare Smarter. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600">
                Revise Better.
              </span> <br />
              Track Everything.
            </h1>

            <p className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              The complete preparation system built exclusively for CA candidates. Systematically structure study target execution, track syllabus completions, and trigger automated review cycles for long-term memory recall.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a 
                href="https://t.me/canextdoorofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-extrabold border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 group"
              >
                <Download size={18} /> Get Started Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => setShowDemoModal(true)}
                className="px-8 py-4 bg-white border border-black text-slate-950 hover:bg-slate-50 rounded-2xl font-extrabold flex items-center justify-center gap-2 transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <Play size={16} className="fill-slate-955 text-slate-955" /> Watch Demo
              </button>
            </div>


          </div>

          {/* Right Visual Column (Premium App Screenshot/Visual Placeholder) */}
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100/30 to-sky-100/30 rounded-[32px] blur-2xl -z-10" />
            
            {/* Elegant glassmorphic placeholder container with Real App Screenshot */}
            <div className="w-full bg-white rounded-3xl border border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col p-0 relative group transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              {/* Window Header */}
              <div className="bg-slate-50 px-4 py-3 border-b-2 border-black flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[10px] text-slate-400 font-mono">ca-next-door.app/dashboard</span>
                <span className="w-10" />
              </div>

              {/* Real Dashboard Image */}
              <div className="relative overflow-hidden bg-slate-100">
                <img 
                  src="/dashboard-preview.png" 
                  alt="CA Next Door Real App Dashboard" 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* 3. FEATURES SECTION */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6 z-10 relative">
        <div className="space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1 text-xs text-indigo-700 font-semibold uppercase tracking-wider">
              Comprehensive Platform
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Everything You Need to Stay on Track
            </h2>
            <p className="text-lg text-slate-500">
              Stop juggling generic checklists, spreadsheets, and calendar reminders. CA Next Door acts as your unified operational system.
            </p>
          </div>

          {/* Grid of 10 Visual Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresList.map((feat) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={feat.id}
                  className="bg-white rounded-2xl border border-black p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                      <div className="p-3 bg-slate-50 text-slate-900 border border-black rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <Icon size={18} />
                      </div>
                      <span className="text-[9px] uppercase font-mono bg-black text-white px-2.5 py-0.5 rounded-md border border-black font-extrabold tracking-wider">
                        {feat.badge}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-black text-slate-900 leading-snug">{feat.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>

                  {/* UI Preview Area */}
                  <div className="mt-6 bg-slate-50 rounded-xl p-4 border border-black">
                    {feat.preview}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ADVANCED REVISION ENGINE SECTION */}
      <section id="revision" className="py-24 bg-slate-50/50 border-t border-b border-slate-200/60 z-10 px-6 relative overflow-hidden">
        
        {/* Glow Blob */}
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[40vw] h-[40vw] rounded-full blur-[140px] opacity-[0.03] bg-indigo-500 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Timeline Visual & Engine Mock */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            
            {/* Visual View Toggler */}
            <div className="flex gap-3 justify-start mb-6">
              <button 
                onClick={() => setRevisionVisualMode('screenshot')}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold border border-black transition-all flex items-center gap-2 ${revisionVisualMode === 'screenshot' ? 'bg-indigo-600 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]' : 'bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]'}`}
              >
                <Eye size={14} /> Planner Interface
              </button>
              <button 
                onClick={() => setRevisionVisualMode('timeline')}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold border border-black transition-all flex items-center gap-2 ${revisionVisualMode === 'timeline' ? 'bg-indigo-600 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]' : 'bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]'}`}
              >
                <Clock size={14} /> Spacing Logic
              </button>
            </div>

            {revisionVisualMode === 'screenshot' ? (
              /* Real Revision Planner Screenshot Container */
              <div className="w-full bg-white rounded-3xl border border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col p-0 relative group transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {/* Window Header */}
                <div className="bg-slate-50 px-4 py-3 border-b-2 border-black flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">ca-next-door.app/revision-planner</span>
                  <span className="w-10" />
                </div>

                {/* Real Screenshot */}
                <div className="relative overflow-hidden bg-slate-100">
                  <img 
                    src="/revision-preview.png" 
                    alt="CA Next Door Real App Revision Planner" 
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>
              </div>
            ) : (
              /* Spacing Logic Timeline (Day 0 - Day 21) */
              <div className="bg-white border border-black rounded-3xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative">
                
                {/* Spaced rep schedule visualization */}
                <div className="space-y-6 md:space-y-8 relative">
                  
                  {/* Connecting line */}
                  <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-indigo-500 via-sky-400 to-purple-500 pointer-events-none opacity-30" />

                  {/* Day 0 */}
                  <div className="flex gap-6 relative z-10 group/item">
                    <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 font-extrabold border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs md:text-sm group-hover/item:scale-105 transition-all duration-300 select-none">
                      Day 0
                    </div>
                    <div className="bg-slate-50 p-5 md:p-6 rounded-2xl border border-black flex-grow shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover/item:translate-x-[-1px] group-hover/item:translate-y-[-1px] group-hover/item:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                      <h4 className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-wider">Initial Study block</h4>
                      <p className="text-xs md:text-sm text-slate-500 mt-1.5 leading-relaxed font-medium">Read chapter, solve exercise questions, highlight essential LDR notes.</p>
                      <div className="flex gap-2 mt-3.5">
                        <span className="bg-emerald-50 text-emerald-800 text-[10px] font-mono px-2 py-0.5 rounded font-black border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">FR Ind AS 115</span>
                        <span className="bg-white text-slate-600 text-[10px] font-mono px-2 py-0.5 rounded font-bold border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">Duration: 4.5h</span>
                      </div>
                    </div>
                  </div>

                  {/* Day 1 */}
                  <div className="flex gap-6 relative z-10 group/item">
                    <div className="w-16 h-16 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0 font-extrabold border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs md:text-sm group-hover/item:scale-105 transition-all duration-300 select-none">
                      Day 1
                    </div>
                    <div className="bg-sky-50 p-5 md:p-6 rounded-2xl border border-black flex-grow shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover/item:translate-x-[-1px] group-hover/item:translate-y-[-1px] group-hover/item:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                      <div className="flex justify-between items-start gap-4">
                        <h4 className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                          🔄 Revision Round 1 <span className="bg-sky-100 text-sky-800 text-[9px] font-mono px-2 py-0.5 rounded font-black border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">Spaced</span>
                        </h4>
                        <span className="text-[9px] text-amber-800 flex items-center gap-1 font-black bg-amber-100 px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] shrink-0">⚠️ OVERDUE</span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed font-medium">Quick review of marked formulas and standard concepts. Takes ~45 mins.</p>
                    </div>
                  </div>

                  {/* Day 7 */}
                  <div className="flex gap-6 relative z-10 group/item">
                    <div className="w-16 h-16 rounded-full bg-purple-500 text-white flex items-center justify-center shrink-0 font-extrabold border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs md:text-sm group-hover/item:scale-105 transition-all duration-300 select-none">
                      Day 7
                    </div>
                    <div className="bg-slate-50 p-5 md:p-6 rounded-2xl border border-black flex-grow shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover/item:translate-x-[-1px] group-hover/item:translate-y-[-1px] group-hover/item:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                      <h4 className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-wider">🔄 Revision Round 2</h4>
                      <p className="text-xs md:text-sm text-slate-500 mt-1.5 leading-relaxed font-medium">Solve mock chapter tests. Identify and address lingering understanding gaps.</p>
                    </div>
                  </div>

                  {/* Day 21 */}
                  <div className="flex gap-6 relative z-10 group/item">
                    <div className="w-16 h-16 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 font-extrabold border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs md:text-sm group-hover/item:scale-105 transition-all duration-300 select-none">
                      Day 21
                    </div>
                    <div className="bg-slate-100 p-5 md:p-6 rounded-2xl border border-black flex-grow opacity-70 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                      <h4 className="text-xs md:text-sm font-black text-slate-500 uppercase tracking-wider">🔄 Final Revision Round 3</h4>
                      <p className="text-xs md:text-sm text-slate-400 mt-1.5 leading-relaxed font-medium">Final brush-up prior to actual final exam. Confirm retention with visual recall widgets.</p>
                    </div>
                  </div>

                </div>

              </div>
            )}
          </div>

          {/* Explanation Text */}
          <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 bg-purple-50 border border-purple-100 rounded-full px-4 py-1.5 text-xs text-purple-700 font-semibold uppercase tracking-wider">
              Syllabus Retention Engine
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Standout Engine Built For Retention
            </h2>

            <p className="text-base md:text-lg text-slate-500 leading-relaxed">
              Reviewing concepts at optimized intervals has been proven to increase long-term visual retention by up to <strong className="text-indigo-600">85%</strong>. CA Next Door maps this review timeline automatically for every single standard and chapter, keeping your prep seamless.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white border border-black rounded-xl p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] space-y-1.5">
                <div className="flex items-center gap-2 font-black text-slate-900 text-sm">
                  <span className="p-1 bg-emerald-100 text-emerald-700 rounded border border-black"><Check size={12} /></span>
                  Overdue alerts
                </div>
                <p className="text-xs text-slate-500 font-medium">Flags pending revision rounds that require immediate slot allocation.</p>
              </div>

              <div className="bg-white border border-black rounded-xl p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] space-y-1.5">
                <div className="flex items-center gap-2 font-black text-slate-900 text-sm">
                  <span className="p-1 bg-emerald-100 text-emerald-700 rounded border border-black"><Check size={12} /></span>
                  Smart scheduling
                </div>
                <p className="text-xs text-slate-500 font-medium">Recalculates spacing cycles based on exam date proximity.</p>
              </div>

              <div className="bg-white border border-black rounded-xl p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] space-y-1.5">
                <div className="flex items-center gap-2 font-black text-slate-900 text-sm">
                  <span className="p-1 bg-emerald-100 text-emerald-700 rounded border border-black"><Check size={12} /></span>
                  Weak chapter detection
                </div>
                <p className="text-xs text-slate-500 font-medium">Leverages test results to prioritize weak standards in your revision cycle.</p>
              </div>

              <div className="bg-white border border-black rounded-xl p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] space-y-1.5">
                <div className="flex items-center gap-2 font-black text-slate-900 text-sm">
                  <span className="p-1 bg-emerald-100 text-emerald-700 rounded border border-black"><Check size={12} /></span>
                  Daily Revision slots
                </div>
                <p className="text-xs text-slate-500 font-medium">Provides a simple 30-minute daily queue containing elements scheduled for that day.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4.5 MISTAKE BOOK SECTION */}
      <section id="mistakes" className="py-24 max-w-7xl mx-auto px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Explanation Text */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-1.5 bg-rose-50 border border-rose-100 rounded-full px-4 py-1.5 text-xs text-rose-750 font-semibold uppercase tracking-wider">
              Error Density Matrix
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Stop Repeating the Same Exam Mistakes
            </h2>

            <p className="text-base md:text-lg text-slate-500 leading-relaxed">
              Study logs show that over <strong className="text-rose-600">70% of marks</strong> are lost by repeating familiar error types. The integrated **Mistake Book** categorizes your slip-ups so you can actively eliminate them before exam day.
            </p>

            {/* Feature Checkmarks list */}
            <div className="space-y-3 pt-2">
              <div className="bg-white border border-black rounded-xl p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex gap-3 items-start">
                <span className="p-1 bg-rose-100 text-rose-700 rounded border border-black shrink-0"><Check size={12} /></span>
                <div>
                  <h4 className="font-black text-slate-900 text-sm">Error Heatmap Matrix</h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">Visualize your error frequencies (Conceptual, Silly, Misread, Time) by chapter.</p>
                </div>
              </div>

              <div className="bg-white border border-black rounded-xl p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex gap-3 items-start">
                <span className="p-1 bg-rose-100 text-rose-700 rounded border border-black shrink-0"><Check size={12} /></span>
                <div>
                  <h4 className="font-black text-slate-900 text-sm">Voice Capture logs</h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">Too tired to type out questions? Tap the microphone to record your mistake instantly.</p>
                </div>
              </div>

              <div className="bg-white border border-black rounded-xl p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex gap-3 items-start">
                <span className="p-1 bg-rose-100 text-rose-700 rounded border border-black shrink-0"><Check size={12} /></span>
                <div>
                  <h4 className="font-black text-slate-900 text-sm">Severity-Based Register</h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">Track resolved vs unresolved errors, prioritizing critical conceptual gaps.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Screen Preview Container */}
          <div className="lg:col-span-7 space-y-6">
            {/* Toggles */}
            <div className="flex flex-wrap gap-3 justify-start lg:justify-end mb-6">
              <button 
                onClick={() => setMistakeVisualMode('heatmap')}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold border border-black transition-all flex items-center gap-2 ${mistakeVisualMode === 'heatmap' ? 'bg-rose-600 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]' : 'bg-white text-slate-700 hover:bg-slate-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]'}`}
              >
                <Activity size={14} /> Error Density Heatmap
              </button>
              <button 
                onClick={() => setMistakeVisualMode('register')}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold border border-black transition-all flex items-center gap-2 ${mistakeVisualMode === 'register' ? 'bg-rose-600 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]' : 'bg-white text-slate-700 hover:bg-slate-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]'}`}
              >
                <FileText size={14} /> Error Register
              </button>
              <button 
                onClick={() => setMistakeVisualMode('voice')}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold border border-black transition-all flex items-center gap-2 ${mistakeVisualMode === 'voice' ? 'bg-rose-600 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]' : 'bg-white text-slate-700 hover:bg-slate-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]'}`}
              >
                <Brain size={14} /> Voice Log Form
              </button>
            </div>

            {/* Screen Window frame */}
            <div className="w-full bg-white rounded-3xl border border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col p-0 relative group transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              {/* Window Header */}
              <div className="bg-slate-50 px-4 py-3 border-b-2 border-black flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[10px] text-slate-400 font-mono">
                  {mistakeVisualMode === 'heatmap' && 'ca-next-door.app/mistake-matrix'}
                  {mistakeVisualMode === 'register' && 'ca-next-door.app/mistake-records'}
                  {mistakeVisualMode === 'voice' && 'ca-next-door.app/log-mistake'}
                </span>
                <span className="w-10" />
              </div>

              {/* Screenshot rendering */}
              <div className="relative overflow-hidden bg-slate-100">
                <AnimatePresence mode="wait">
                  {mistakeVisualMode === 'heatmap' && (
                    <motion.img 
                      key="heatmap"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      src="/mistake-matrix.png" 
                      alt="Mistake Matrix Heatmap screenshot" 
                      className="w-full h-auto object-cover"
                    />
                  )}
                  {mistakeVisualMode === 'register' && (
                    <motion.img 
                      key="register"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      src="/mistake-register.png" 
                      alt="Error Register table screenshot" 
                      className="w-full h-auto object-cover"
                    />
                  )}
                  {mistakeVisualMode === 'voice' && (
                    <motion.img 
                      key="voice"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      src="/mistake-log.png" 
                      alt="Log Mistake form with Voice capture screenshot" 
                      className="w-full h-auto object-cover"
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. STUDENT WORKFLOW SECTION */}
      <section id="workflow" className="py-24 max-w-7xl mx-auto px-6 z-10 relative">
        <div className="space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1 text-xs text-indigo-700 font-semibold uppercase tracking-wider">
              Discipline Blueprint
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Structured Step-by-Step Study Journey
            </h2>
            <p className="text-lg text-slate-500">
              Say goodbye to random study sequences. Click through the operational blueprint of successful candidates.
            </p>
          </div>

          {/* Stepper Navigation */}
          <div className="relative flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto gap-4 md:gap-0 bg-slate-50 p-4 md:p-6 rounded-2xl border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {/* Horizontal Line connecting steps (hidden on mobile) */}
            <div className="absolute top-[38px] left-[8%] right-[8%] h-[2px] bg-slate-200 hidden md:block z-0" />
            
            {/* Active Highlight Line */}
            <div 
              className="absolute top-[38px] left-[8%] h-[2px] bg-indigo-600 hidden md:block z-0 transition-all duration-500" 
              style={{ width: `${(activeWorkflowStep / 5) * 84}%` }}
            />
            
            {['Plan', 'Study', 'Revise', 'Test', 'Analyze', 'Improve'].map((step, idx) => {
              const isActive = activeWorkflowStep === idx;
              const isPassed = activeWorkflowStep > idx;
              return (
                <button
                  key={step}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className="relative z-10 flex flex-row md:flex-col items-center gap-4 md:gap-2.5 w-full md:w-auto px-4 py-2.5 md:py-0 focus:outline-none group transition-all duration-200 rounded-xl hover:bg-slate-100 md:hover:bg-transparent"
                >
                  {/* Step Badge Circle */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-mono text-sm font-black border transition-all duration-300 ${
                    isActive 
                      ? 'bg-black border-black text-white scale-110 shadow-md ring-4 ring-amber-100' 
                      : isPassed 
                        ? 'bg-indigo-600 border-indigo-600 text-white' 
                        : 'bg-white border-slate-300 text-slate-400 group-hover:border-slate-500 group-hover:text-slate-800'
                  }`}>
                    {isPassed ? <Check size={16} className="stroke-[3]" /> : `0${idx + 1}`}
                  </div>
                  
                  {/* Step Label */}
                  <div className="flex flex-col md:items-center">
                    <span className={`text-[10px] font-mono uppercase tracking-widest ${isActive ? 'text-indigo-600 font-bold' : 'text-slate-400 font-medium'}`}>
                      {idx === 0 ? 'First' : idx === 1 ? 'Next' : idx === 2 ? 'Third' : idx === 3 ? 'Fourth' : idx === 4 ? 'Fifth' : 'Goal'}
                    </span>
                    <span className={`text-xs md:text-sm font-extrabold transition-colors duration-200 ${isActive ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-800'}`}>
                      {step}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Stepper Card */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeWorkflowStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="bg-white border border-black p-8 md:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="lg:col-span-5 space-y-6">
                <span className="inline-flex items-center gap-1.5 text-xs uppercase font-mono bg-indigo-50 text-indigo-700 border border-indigo-200 px-3.5 py-1 rounded-full font-bold">
                  {workflowSteps[activeWorkflowStep].tag}
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {workflowSteps[activeWorkflowStep].title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {workflowSteps[activeWorkflowStep].desc}
                </p>

                {/* Sub-milestones checklist */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Blueprint Targets</div>
                  <ul className="space-y-2.5">
                    {workflowSteps[activeWorkflowStep].bullets?.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-3 text-sm text-slate-700">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 border border-black flex items-center justify-center text-emerald-800">
                          <Check size={10} className="stroke-[3.5]" />
                        </div>
                        <span className="font-semibold text-slate-900">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <a 
                    href="https://t.me/canextdoorofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-black hover:bg-slate-900 text-white rounded-xl text-sm font-extrabold border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                  >
                    Use this system <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Workflow mockup preview replaced with real browser screenshot frames */}
              <div className="lg:col-span-7">
                <div className="w-full bg-white rounded-2xl border border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col p-0 relative group transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  {/* Window Header */}
                  <div className="bg-slate-50 px-4 py-2.5 border-b-2 border-black flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-300" />
                      <span className="w-2 h-2 rounded-full bg-slate-300" />
                      <span className="w-2 h-2 rounded-full bg-slate-300" />
                    </div>
                    <span className="text-[9px] text-slate-400 font-mono">
                      {activeWorkflowStep === 0 && 'ca-next-door.app/dashboard'}
                      {activeWorkflowStep === 1 && 'ca-next-door.app/daily-tasks'}
                      {activeWorkflowStep === 2 && 'ca-next-door.app/revision-planner'}
                      {activeWorkflowStep === 3 && 'ca-next-door.app/mistake-book'}
                      {activeWorkflowStep === 4 && 'ca-next-door.app/day-log'}
                      {activeWorkflowStep === 5 && 'ca-next-door.app/late-tasks'}
                    </span>
                    <span className="w-8" />
                  </div>
                  <div className="bg-slate-50 overflow-hidden flex items-center justify-center">
                    {activeWorkflowStep === 0 && (
                      <img 
                        src="/dashboard-preview.png" 
                        alt="Overview Dashboard screenshot" 
                        className="w-full h-auto object-cover" 
                      />
                    )}
                    {activeWorkflowStep === 1 && (
                      <img 
                        src="/tasks-daily.png" 
                        alt="Daily Action Planner screenshot" 
                        className="w-full h-auto object-cover" 
                      />
                    )}
                    {activeWorkflowStep === 2 && (
                      <img 
                        src="/revision-preview.png" 
                        alt="Advanced Revision Scheduler screenshot" 
                        className="w-full h-auto object-cover" 
                      />
                    )}
                    {activeWorkflowStep === 3 && (
                      <img 
                        src="/mistake-matrix.png" 
                        alt="Error Density Heatmap Matrix screenshot" 
                        className="w-full h-auto object-cover" 
                      />
                    )}
                    {activeWorkflowStep === 4 && (
                      <img 
                        src="/tasks-log.png" 
                        alt="Activity Analyst Day Log screenshot" 
                        className="w-full h-auto object-cover" 
                      />
                    )}
                    {activeWorkflowStep === 5 && (
                      <img 
                        src="/tasks-backlog.png" 
                        alt="Late Tasks Backlog Tracker screenshot" 
                        className="w-full h-auto object-cover" 
                      />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 7. WHY STUDENTS LOVE IT SECTION */}
      <section id="why" className="py-24 max-w-7xl mx-auto px-6 z-10 relative">
        <div className="space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1 text-xs text-indigo-700 font-semibold uppercase tracking-wider">
              Student Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Why Serious CA Aspirants Love It
            </h2>
            <p className="text-lg text-slate-500">
              Discover how ambitious students secured ranks and passed examinations using the platform.
            </p>
          </div>

          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div 
                key={idx}
                className="bg-white border border-black p-6 rounded-3xl flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex gap-1 text-amber-400">
                    <Star size={14} className="fill-amber-400 text-amber-400" />
                    <Star size={14} className="fill-amber-400 text-amber-400" />
                    <Star size={14} className="fill-amber-400 text-amber-400" />
                    <Star size={14} className="fill-amber-400 text-amber-400" />
                    <Star size={14} className="fill-amber-400 text-amber-400" />
                  </div>

                  <p className="text-xs text-slate-655 italic leading-relaxed font-medium">
                    "{test.text}"
                  </p>
                </div>

                {/* Profile card & metrics badge */}
                <div className="flex justify-between items-center border-t-2 border-black pt-4 mt-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full border border-black flex items-center justify-center font-black text-sm shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] uppercase shrink-0 ${test.color}`}>
                      {test.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-900 leading-tight">{test.name}</h4>
                      <p className="text-[10px] text-slate-500 font-semibold leading-tight mt-0.5">{test.role}</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono font-black bg-emerald-50 text-emerald-800 border border-black px-2 py-0.5 rounded shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] shrink-0">
                    {test.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
        <div className="bg-white border border-black rounded-3xl p-12 text-center space-y-8 relative overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
          
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Your CA Journey Deserves Better Systems.
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
              Ditch fragile planning spreadsheets and generic checklist books. Build deep visual consistency, systematic review routines, and walk into the examination hall rank-ready.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a 
              href="https://t.me/canextdoorofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-extrabold border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 group"
            >
              <Download size={18} /> Download Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={() => setShowDemoModal(true)}
              className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-2xl font-extrabold border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 group"
            >
              <Play size={16} className="fill-slate-900 text-slate-900" /> Watch Demo
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 border-t-4 border-black py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 text-xs">
          
          {/* Logo & Info column inside dark neobrutalist card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-950 border-2 border-black p-6 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/logo.png" 
                  alt="CA Next Door Logo" 
                  className="w-9 h-9 object-contain rounded-lg border border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]"
                />
                <span className="font-black text-lg tracking-tight text-white">
                  CA Next Door
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed font-semibold">
                The high-fidelity preparation and syllabus tracking command center built specifically for ambitious CA Aspirants. Secure ranks with better preparation discipline.
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-black text-white uppercase tracking-wider text-[11px] font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" /> Platform Core
            </h4>
            <div className="flex flex-col gap-2">
              <a 
                href="#features" 
                className="inline-block px-3 py-1.5 rounded-lg border border-transparent hover:border-black hover:bg-slate-950 hover:text-white hover:translate-x-[-1px] hover:translate-y-[-1px] font-bold text-slate-400 hover:shadow-[1.5px_1.5px_0px_0px_rgba(99,102,241,1)] transition-all w-max"
              >
                Features list
              </a>
              <a 
                href="#revision" 
                className="inline-block px-3 py-1.5 rounded-lg border border-transparent hover:border-black hover:bg-slate-950 hover:text-white hover:translate-x-[-1px] hover:translate-y-[-1px] font-bold text-slate-400 hover:shadow-[1.5px_1.5px_0px_0px_rgba(99,102,241,1)] transition-all w-max"
              >
                Revision Optimizer
              </a>
              <a 
                href="#workflow" 
                className="inline-block px-3 py-1.5 rounded-lg border border-transparent hover:border-black hover:bg-slate-950 hover:text-white hover:translate-x-[-1px] hover:translate-y-[-1px] font-bold text-slate-400 hover:shadow-[1.5px_1.5px_0px_0px_rgba(99,102,241,1)] transition-all w-max"
              >
                Candidate blueprint
              </a>
            </div>
          </div>

          {/* Support Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-black text-white uppercase tracking-wider text-[11px] font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" /> Help & Operations
            </h4>
            <p className="text-slate-400 leading-relaxed font-semibold">
              Have questions regarding the revision dashboard setup or installation widget bugs? Our student support squad is here to assist.
            </p>
            <div className="pt-2">
              <a 
                href="mailto:canextdoor.office@gmail.com" 
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all font-extrabold text-xs"
              >
                📩 canextdoor.office@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Copyright strip */}
        <div className="max-w-7xl mx-auto border-t-2 border-black mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-semibold">
          <p>© 2026 CA Next Door. All rights reserved. Designed for ranks.</p>
          <div className="flex items-center gap-4 text-[10px] uppercase font-mono">
            <a 
              href="https://t.me/canextdoorofficial" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-indigo-400 transition-colors font-black text-slate-400"
            >
              Telegram community
            </a>
            <span>•</span>
            <span className="text-emerald-500 font-extrabold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Platform Active
            </span>
          </div>
        </div>
      </footer>

      {/* WATCH DEMO VIDEO MODAL */}
      <AnimatePresence>
        {showDemoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDemoModal(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-5xl bg-white border border-black rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative z-10"
            >
              {/* Modal Header */}
              <div className="bg-slate-50 px-6 py-4 border-b border-black flex justify-between items-center">
                <span className="font-extrabold text-slate-900 flex items-center gap-2 text-sm md:text-base">
                  <Play size={16} className="fill-indigo-600 text-indigo-600" /> CA Next Door Video Walkthrough Library
                </span>
                <button 
                  onClick={() => setShowDemoModal(false)}
                  className="p-1.5 rounded-lg border border-black bg-white hover:bg-slate-50 text-slate-700 transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Main Content Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Sidebar: Selector list */}
                <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-black p-4 md:p-6 bg-slate-50 space-y-4 max-h-[350px] lg:max-h-[500px] overflow-y-auto">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase font-mono bg-black text-white px-2.5 py-0.5 rounded-md border border-black font-extrabold tracking-wider w-max">
                      Tutorial Engine
                    </span>
                    <h3 className="text-lg font-black text-slate-900 mt-2">Available Guides</h3>
                    <p className="text-xs text-slate-500 font-medium">Click on any video below to switch lessons and learn how to use CA Next Door.</p>
                  </div>
                  
                  <div className="space-y-3.5 pt-2">
                    {demoVideos.map((video) => {
                      const IconComponent = video.icon;
                      const isSelected = selectedDemoVideoId === video.id;
                      return (
                        <button
                          key={video.id}
                          onClick={() => setSelectedDemoVideoId(video.id)}
                          className={`w-full text-left p-4 rounded-2xl border border-black transition-all flex gap-3.5 items-start ${
                            isSelected
                              ? 'bg-indigo-600 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                              : 'bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                          }`}
                        >
                          <div className={`p-2 rounded-xl border border-black shrink-0 ${
                            isSelected ? 'bg-white text-indigo-600' : 'bg-slate-100 text-slate-900'
                          }`}>
                            <IconComponent size={18} />
                          </div>
                          <div className="space-y-1 w-full min-w-0">
                            <div className="flex justify-between items-center gap-2">
                              <span className={`text-xs font-black uppercase tracking-wider ${
                                isSelected ? 'text-indigo-200' : 'text-indigo-600'
                              }`}>
                                {video.badge}
                              </span>
                              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-black ${
                                isSelected ? 'bg-indigo-700 text-white border-indigo-900' : 'bg-slate-50 text-slate-600'
                              }`}>
                                {video.duration}
                              </span>
                            </div>
                            <h4 className="text-xs md:text-sm font-black leading-snug truncate">{video.title}</h4>
                            <p className={`text-[10px] leading-relaxed line-clamp-2 ${
                              isSelected ? 'text-indigo-100' : 'text-slate-500'
                            }`}>
                              {video.description}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right Area: Player or Placeholder */}
                <div className="lg:col-span-7 bg-slate-950 flex flex-col justify-between overflow-hidden">
                  
                  {/* Current Active Video Container */}
                  {(() => {
                    const activeVideo = demoVideos.find(v => v.id === selectedDemoVideoId) || demoVideos[0];
                    if (activeVideo.url) {
                      return (
                        <div className="w-full aspect-video lg:aspect-auto lg:h-[400px] bg-black relative animate-fade-in">
                          <iframe 
                            src={`${activeVideo.url}?autoplay=1&rel=0`} 
                            title={activeVideo.title}
                            className="absolute inset-0 w-full h-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                          />
                        </div>
                      );
                    } else {
                      // Coming Soon Premium State Placeholder
                      return (
                        <div className="w-full min-h-[300px] lg:h-[400px] bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                          {/* Decorative subtle background blobs */}
                          <div className="absolute top-[20%] left-[20%] w-[150px] h-[150px] rounded-full blur-[80px] opacity-[0.25] bg-indigo-500 pointer-events-none" />
                          <div className="absolute bottom-[20%] right-[20%] w-[150px] h-[150px] rounded-full blur-[80px] opacity-[0.25] bg-purple-500 pointer-events-none" />
                          
                          <div className="space-y-6 relative z-10 max-w-sm">
                            <div className="inline-flex p-4 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 animate-pulse">
                              <Sparkles size={36} />
                            </div>
                            
                            <div className="space-y-2">
                              <span className="text-[9px] uppercase font-mono bg-indigo-500 text-white px-2 py-0.5 rounded font-black border border-indigo-400 tracking-wider">
                                Video Coming Soon
                              </span>
                              <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">{activeVideo.title}</h3>
                              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                                We are putting the finishing touches on a masterclass walkthrough that guides you through the spaced revision workflow and tracker engine.
                              </p>
                            </div>

                            {/* Quick Action to Telegram */}
                            <div className="pt-2">
                              <a
                                href="https://t.me/canextdoorofficial"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white border-2 border-black rounded-xl text-xs font-extrabold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                              >
                                <MessageSquare size={14} /> Join Telegram for Updates
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })()}

                  {/* Active Video Info Footer inside right column */}
                  {(() => {
                    const activeVideo = demoVideos.find(v => v.id === selectedDemoVideoId) || demoVideos[0];
                    return (
                      <div className="bg-slate-900 border-t border-slate-800 p-4 px-6 flex justify-between items-center text-xs">
                        <div className="space-y-1 min-w-0">
                          <p className="text-slate-400 font-medium text-[10px] uppercase font-mono tracking-wider">Now Playing</p>
                          <h4 className="text-white font-extrabold truncate">{activeVideo.title}</h4>
                        </div>
                        <span className="text-slate-400 font-mono text-[10px] shrink-0">
                          {activeVideo.url ? '📺 Standard Embed' : '⏳ Recording...'}
                        </span>
                      </div>
                    );
                  })()}

                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* DOWNLOAD / PAY MODAL */}
      <AnimatePresence>
        {showDownloadModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDownloadModal(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 shadow-xl relative z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setShowDownloadModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X size={18} />
              </button>

              {/* Header Details */}
              <div className="text-center space-y-2 mt-2">
                <img 
                  src="/logo.png" 
                  alt="CA Next Door" 
                  className="w-12 h-12 mx-auto object-contain"
                />
                <h3 className="text-lg font-black text-slate-900">Unlock Lifetime Rank Access</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Scan the UPI QR code below using any payment app (GPay, PhonePe, Paytm) to activate your account.
                </p>
              </div>

              {/* QR Image Area */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-150 my-6">
                <img 
                  src="/payment-qr.jpeg" 
                  alt="UPI QR Code Payment" 
                  className="w-[180px] h-[180px] rounded-xl mx-auto object-cover border border-slate-200"
                />
                <div className="flex justify-between items-center text-[10px] mt-4 px-2 font-mono text-slate-400">
                  <span>Merchant: CA Next Door</span>
                  <span>UPI ID: study@canextdoor</span>
                </div>
              </div>

              {/* Confirm details / Done action */}
              <div className="space-y-4">
                <div className="flex justify-between text-xs font-bold text-slate-800 border-t border-b border-slate-200 py-3">
                  <span>1x Syllabus Tracker & Revision Engine License</span>
                  <span className="text-indigo-600">₹999 / Lifetime</span>
                </div>

                <a 
                  href="https://forms.gle/dYdoFBPXWjQThG4YA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-center font-extrabold text-sm block transition-all shadow-md shadow-indigo-100"
                >
                  I've Done the Payment 👍
                </a>
                
                <p className="text-[10px] text-slate-400 text-center leading-normal">
                  Payment verification takes ~10 minutes. An activation link + onboarding tutorial will be sent immediately to your registered email ID.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* RESOURCES COMING SOON TOAST */}
      <AnimatePresence>
        {showResourcesToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 bg-slate-900 border-2 border-black p-4 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white flex items-center gap-3 max-w-sm"
          >
            <div className="bg-indigo-600 p-2 rounded-xl border border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] text-white shrink-0">
              <Sparkles size={16} className="animate-pulse" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-white">Resources Coming Soon!</h4>
              <p className="text-[11px] text-slate-400 font-semibold mt-0.5">We are compiling revision guides, test papers, and formula sheets. Stay tuned!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
