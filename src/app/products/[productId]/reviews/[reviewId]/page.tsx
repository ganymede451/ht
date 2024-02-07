import { notFound } from "next/navigation"

export default function review({ params }: { params: { productId: string, reviewId: string } }) {
    if (parseInt(params.reviewId) > 1000) notFound();
    else
        return (
            <h1>product {params.productId} review {params.reviewId} </h1>
        )
}