"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Test } from "@util/test/types";

// Record correctness for subjects of test
interface OverviewState {
    test: Test | null;
    setTest: (test: Test) => void;
    clearTest: () => void;
};

export const useTestStore = create<OverviewState>()(
    persist(
        (set) => ({
            test: null,
            setTest: (test: Test) => set({ test }),
            clearTest: () => set({ test: null })
        }),
        {
            name: 'test-store',
            partialize: (state) => ({ 
                test: state.test,
                testTime: state.test?.timeLimit
            })
        }
    )
);