export interface NavbarProps {
  role: 'user' | 'admin';
  onRoleChange?: (newRole: 'user' | 'admin') => void; // টেস্ট করার জন্য অপশনাল
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  user?: {
    id: string;
    name: string;
    email: string;
    image?: string;
  } | null;
}