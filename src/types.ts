export interface Brand {
  id: string;
  name: string;
  type: 'security' | 'web3_security' | 'publishing' | 'printing' | 'education' | 'ai_music' | 'furniture' | 'other';
  description: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  url?: string;
  iconName: string;
}

export interface TechItem {
  id: string;
  name: string;
  category: 'Cyber Security' | 'Web3 & dApps' | 'Book Publishing' | 'Poster Printing' | 'Infrastructure' | 'E-Commerce' | 'Automation' | 'Data & AI';
  description: string;
  iconName: string;
  level: number; // 1-100 representation
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  iconName: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
  brandInterest: string;
}
