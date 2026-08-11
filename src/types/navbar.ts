export interface NavbarProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  user?: {
    id: string;
    name: string;
    email: string;
    image?: string;
  } | null;
}