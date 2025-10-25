import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { UserState } from '../types';

export const useUserStore = create<UserState>()(
  devtools(
    set => ({
      isLoggedIn: false,
      user: null,
      setUser: user => set({ user, isLoggedIn: !!user }),
      logout: () => set({ user: null, isLoggedIn: false }),
    }),
    {
      name: 'user-store',
    }
  )
);
