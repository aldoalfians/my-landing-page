import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Image } from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css'
import NotFound from '../assets/NotFound.jpg'

const FaqScreen = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <Link className=' my-5' to='/'>
        <i
          className='fas fa-arrow-circle-left'
          style={{ fontSize: '2rem', color: '#c4c4c4' }}
        ></i>
      </Link>
      <Container className='d-flex justify-content-center'>
        <Image
          src={NotFound}
          alt='notfound'
          fluid
          data-aos='fade-left'
          width='50%'
        />
      </Container>
    </>
  )
}

export default FaqScreen
