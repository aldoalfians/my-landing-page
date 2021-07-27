import React, { useEffect } from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css'
import TravelPhoto from '../assets/travel.jpg'

const HomeScreen = ({ history }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const bookingHandler = (e) => {
    e.preventDefault()
    history.push('/booking')
  }
  return (
    <>
      <Row>
        <Col xs={10} md={4}>
          <h1 className='mt-5' data-aos='fade-right'>
            <strong>It's Time For Travel</strong>
          </h1>
          <p data-aos='fade-left'>
            After a long time at home, it is time to travel, but do not forget
            to stick to health protocols even when traveling. Let's hurry and
            booking your ticket on aldo travel for a discount
          </p>

          <Button
            className='btn btn-sm'
            variant='outline-primary'
            style={{
              border: '2px solid',
              borderRadius: '7px',
              fontSize: '13px',
              fontFamily: 'Open Sans, sans-serif',
            }}
            data-aos='fade-up'
            onClick={bookingHandler}
          >
            Booking
          </Button>
        </Col>
        <Col xs={10} md={8} className='d-flex justify-content-end my-3'>
          <Image
            src={TravelPhoto}
            alt='travel'
            fluid
            width='80%'
            data-aos='fade-left'
          />
        </Col>
      </Row>
    </>
  )
}

export default HomeScreen
