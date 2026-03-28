import { useDispatch, useSelector } from 'react-redux'
import ProductCard from './components/Card'
import { useEffect } from 'react'
import { fetchProducts } from './redux/productSlice'

const Product = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    const productSelector = useSelector((state) => state.products.items)
    // console.log(productSelector)
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 mt-5 px-5'>
            {
                productSelector.length && productSelector.map((item) => (
                    <div key={item.id} className='p-2 border border-gray-700 rounded-md relative hover:-top-1 transition-all'>
                        <ProductCard product={item} />
                    </div>
                ))
            }

        </div>
    )
}

export default Product