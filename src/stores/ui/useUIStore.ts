import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { UIState } from '../types';

export const useUIStore = create<UIState>()(
  devtools(
    set => ({
      sidebarOpen: true,
      mobileMenuOpen: false,
      content: '',
      setSidebarOpen: sidebarOpen => set({ sidebarOpen }),
      setMobileMenuOpen: mobileMenuOpen => set({ mobileMenuOpen }),
      setContent: content => set({ content }),
      toggleSidebar: () => set(state => ({ sidebarOpen: !state.sidebarOpen })),
      toggleMobileMenu: () =>
        set(state => ({ mobileMenuOpen: !state.mobileMenuOpen })),
    }),
    {
      name: 'ui-store',
    }
  )
);
