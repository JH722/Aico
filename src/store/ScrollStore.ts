import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserIdState = {
  scrolled: boolean;
  setScrolled: (scroll: boolean) => void;
};

const useScrollStore = create<UserIdState>()(
  persist(
    (set) => ({
      scrolled: false,
      setScrolled: (scroll: boolean) => set(() => ({ scrolled: scroll })),
    }),
    {
      name: 'scrollStore',
    }
  )
);

export default useScrollStore;
