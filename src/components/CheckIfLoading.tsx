import { ReactNode } from "react";



interface CheckIfLoadingProps {
    loading: boolean;
    children: ReactNode;
}

export default function CheckIfLoading({ children, loading }: CheckIfLoadingProps) {
    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-lg font-medium">Loading...</p>
                </div>
            </div>
        );
    }

    return children;
}