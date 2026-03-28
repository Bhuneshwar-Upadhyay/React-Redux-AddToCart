import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slice';


function ProductCard({ product }) {
    const dispatch = useDispatch()
    const cartSelecter = useSelector((state) => state.cart.items)
    return (
        <Card>
            <Card.Img variant="top" className='w-full rounded-md' src={product.images[0]} />
            <Card.Body className='text-left'>
                <Card.Title className='mt-3 text-sm text-nowrap overflow-hidden text-ellipsis'>{product.title}</Card.Title>
                <p className='text-xs text-gray-600'>{product.brand}</p>
                <Card.Text className='mt-3 text-sm'>$ {product.price}</Card.Text>
                <div className='flex gap-2 text-sm mt-2 items-center'><FaStar className='text-orange-400 text-sm' /> {product.rating}</div>

                {
                    cartSelecter.find(cartItem => cartItem.id === product.id) ?
                        <Button className='w-full mt-3 mb-2 border border-gray-700 py-2 px-3 rounded-md text-sm cursor-pointer bg-gray-500 text-gray-900 ' disabled>Added To Cart</Button>
                        :
                        <Button onClick={() => dispatch(addItem(product))} className='w-full mt-3 mb-2 border border-gray-700 py-2 px-3 rounded-md text-sm cursor-pointer bg-sky-500 hover:bg-sky-400 text-gray-900'>Add To Cart</Button>
                }

            </Card.Body>
        </Card>
    );
}

export default ProductCard;