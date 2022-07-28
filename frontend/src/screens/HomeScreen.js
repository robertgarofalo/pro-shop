import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts, reset } from '../features/products/productSlice'
import Spinner from '../components/Spinner'

const HomeScreen = () => {

  const dispatch = useDispatch()

  const { products, isLoading, isError, message } = useSelector(
    (state) => state.products
  )

  useEffect(() => {

    if (isError) {
      console.log(message)
    }

    dispatch(getProducts())

    return () => {
      dispatch(reset())
    }

  },[isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product}/>
                </Col>
            ))}
        </Row>
    </>
  )
}
export default HomeScreen