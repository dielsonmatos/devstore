'use client'

import { useSearchParams } from "next/navigation"

export function CurrentSearch() {
    const SearchParams = useSearchParams()

    const query = SearchParams.get('q')

    return (
        <p className="text-sm">
            Resultado para: <span className="font-semibold">{query}</span>
        </p>
    )
}