import styles from './Checkout.module.css'
import { LoadingIcon } from './Icons'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/exports'
import { useEffect, useMemo } from 'react'
import { getProduct } from './store/product.thunk'
import { decrement, increment } from './store/product.Slice'

const Product = ({
    id,
    name,
    availableCount,
    price,
    orderedQuantity,
    total,
}) => {
    const dispatch = useDispatch()
    const decrementHandler = () => {
        dispatch(decrement({ id }))
    }

    const IncrementHandler = () => {
        dispatch(increment({ id }))
    }
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{availableCount}</td>
            <td>${price}</td>
            <td>{orderedQuantity}</td>
            <td>${total}</td>
            <td>
                <button
                    disabled={availableCount === orderedQuantity}
                    className={styles.actionButton}
                    onClick={decrementHandler}
                >
                    +
                </button>
                <button
                    disabled={!orderedQuantity}
                    className={styles.actionButton}
                    onClick={IncrementHandler}
                >
                    -
                </button>
            </td>
        </tr>
    )
}

const Checkout = () => {
    const products = useSelector((state) => state.product.products)
    const dispatch = useDispatch()
    console.log(products)
    useEffect(() => {
        dispatch(getProduct())
    }, [])
    const total = useMemo(() => {
        return products.reduce((accu, current) => accu + current.total, 0)
    })
    const discount = useMemo(() => {
        return products.reduce((accu, current) => accu + current.price, 0)
    })
    console.log(discount)
    return (
        <div>
            <header className={styles.header}>
                <h1>Electro World</h1>
            </header>
            <main>
                <LoadingIcon />
                <h4 style={{ color: 'red' }}>Some thing went wrong</h4>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th># Available</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => {
                            return <Product {...product} key={product.id} />
                        })}
                    </tbody>
                </table>
                <h2>Order summary</h2>
                <p>Discount:{discount} $</p>
                <p>Total: ${total} </p>
            </main>
        </div>
    )
}

export default Checkout
