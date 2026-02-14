import CardProduct from "@/components/CardProduct"
import { Spinner } from "@/components/ui/spinner"
import { useGetListProducts } from "@/hooks/useProduct"
import type { Product } from "@/types/product.entity"

const ProductListPage = () => {
    const { data, isLoading } = useGetListProducts()
    console.log(data)
    return (
    <>
        {isLoading ? (
            <Spinner />
        ) : (
            <div className="grid grid-cols-4 gap-4">
                {data.result.data.map((product: Product) => (
                    <CardProduct {...product} />
                ))}
            </div>
        )}
    </>
)

}

export default ProductListPage