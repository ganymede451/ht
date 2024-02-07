import notFound from "@/app/not-found";

export default function doc({ params }: { params: { slug: string[] } }) {
    if (params.slug.length == 2) {
        return <h1>doc {params.slug[0]} concept {params.slug[1]}</h1>;
    }

    else if (params.slug.length == 1) {
        return <h1>doc {params.slug[0]}</h1>;
    }
    else notFound();

}