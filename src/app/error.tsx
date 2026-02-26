"use client"

import { useEffect } from "react"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "50vh", gap: "1rem", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.5rem", color: "#222" }}>Oops! Something went wrong.</h2>
            <p style={{ color: "#666" }}>We couldn't load the news at this time.</p>
            <button
                onClick={() => reset()}
                style={{
                    padding: "10px 20px",
                    background: "#222",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Try again
            </button>
        </div>
    )
}
