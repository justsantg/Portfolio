import { create } from 'zustand';

interface NavbarState {
  navbarItemActive: number;
  selectedItemNavbar: (navItem: number) => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  navbarItemActive: 1,
  selectedItemNavbar: (navItem: number) => {
    set({ navbarItemActive: navItem });
  },
}));
