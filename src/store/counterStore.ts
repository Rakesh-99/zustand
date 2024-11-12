import { create } from 'zustand';



type userStore = {
    count: number,
    increment: () => void,
    decrement: () => void,
    multiply: () => void
}


// create store : 
export const useUserStore = create<userStore>((set) => ({
    count: 0,
    increment: () => {
        set((state) => ({ count: state.count + 1 }));
    },
    decrement: () => {
        set((state) => ({ count: state.count - 1 }));
    },
    multiply: () => {
        set((state) => ({ count: state.count * 2 }));
    }
}));