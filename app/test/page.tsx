"use client"

import {
    useCallback,
    useEffect,
    useState
} from "react"

import CheckIfLoading from "@components/CheckIfLoading";

import { Test } from "@util/test/types";



export default function Page() {
    const [loading, setLoading] = useState<boolean>(false);
    const [test, setTest] = useState<Test | null>(null);

    const generateTest = useCallback(async () => {
        try {
            setLoading(true);

            const res = await fetch("/api/test/generate", {
                method: "GET"
            });

            if (res.ok) {
                setTest(test);
            } else {
                // No error handlign for simulated data.
            }
        } catch {
        } finally {
            setLoading(false);
        }
    }, []);


    useEffect(() => {
        generateTest();
    }, []);


    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <CheckIfLoading loading={loading}>
                    <h2 className="text-lg font-medium">Test will be here</h2>
                </CheckIfLoading>
                </div>
        </div>
    )
}