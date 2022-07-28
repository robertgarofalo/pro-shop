import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import Spinner from '../components/Spinner'
import { useSelector, useDispatch } from 'react-redux'
import { getSingleProduct, reset } from '../features/products/productSlice'

const ProductScreen = ({ match }) => {

    const dispatch = useDispatch()
    const { product, isError, isLoading, message } = useSelector(
        (state) => state.products
    )

    useEffect(() => {

        if (isError) {
          console.log(message)
        }
    
        dispatch(getSingleProduct(match.params.id))
    
        return () => {
          dispatch(reset())
        }
    
      },[isError, message, dispatch])

      if (isLoading) {
        return <Spinner />
      }
    

  return (
    <>
        <Link className='btn btn-light my-3' to='/'>Go back</Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: ${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col> 
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price
                                </Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button className='w-100' type='button' disabled={product.countInStock === 0}>
                                Add To Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>
  )
}
export default ProductScreen   