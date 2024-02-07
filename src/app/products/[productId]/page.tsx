export default function prodDetails({ params }: { params: { productId: string } }) {
    return <p>details of product {params.productId}</p>;
}