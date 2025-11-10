import { ReactNode } from "react";



interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick} 
            className="px-8 py-3 text-xl text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition-colors cursor-pointer"
        >
            {children}
        </button>
    );
}