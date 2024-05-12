import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function OrderSummaryPage() {
    const searchQuery = useSearchParams()[0];
    const orderStatus = searchQuery.get("status")
    console.log(searchQuery.get("status"));

    return (
        <div id="OrderSummaryPage">
            <h3>Order Palced</h3>
        </div>
    )
}
