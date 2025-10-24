import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { UIState } from './types';

export const useUIStore = create<UIState>()(
  devtools(
    set => ({
      theme: 'light',
      sidebarOpen: true,
      mobileMenuOpen: false,
      setTheme: theme => set({ theme }),
      setSidebarOpen: sidebarOpen => set({ sidebarOpen }),
      setMobileMenuOpen: mobileMenuOpen => set({ mobileMenuOpen }),
      toggleSidebar: () => set(state => ({ sidebarOpen: !state.sidebarOpen })),
      toggleMobileMenu: () =>
        set(state => ({ mobileMenuOpen: !state.mobileMenuOpen })),
    }),
    {
      name: 'ui-store',
    }
  )
);
