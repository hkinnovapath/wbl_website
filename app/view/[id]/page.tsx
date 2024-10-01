"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ResumeViewPage() {
    const [resumeHtml, setResumeHtml] = useState<string>("");
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        if (id) {
            const token = localStorage.getItem('access_token');
            if (token) {
                fetchResume(id as string, token as string);
            } else {
                console.error('No token found in localStorage');
                setResumeHtml('Please log in to view this resume');
            }
        }
    }, [id]);

    const fetchResume = async (id: string, token: string) => {
        try {
            const response = await fetch(`${process.env.RESUME_PUBLIC_API_URL}/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                const html = await response.text();
                setResumeHtml(html);
            } else {
                setResumeHtml("Failed to fetch resume");
            }
        } catch (error) {
            console.error("Error fetching resume:", error);
            setResumeHtml("An error occurred while fetching the resume");
        }
    }

    if (!resumeHtml) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-3xl font-semibold">
                    Loading
                    <span className="inline-flex ml-2">
                        <span className="animate-bounce mx-1.5 text-blue-500">.</span>
                        <span className="animate-bounce mx-1.5 animation-delay-200 text-green-500">.</span>
                        <span className="animate-bounce mx-1.5 animation-delay-400 text-red-500">.</span>
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-br from-blue-100 via-white to-purple-100 min-h-screen">
            <div 
                className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto"
                dangerouslySetInnerHTML={{ __html: resumeHtml }} 
            />
        </div>
    );
}
