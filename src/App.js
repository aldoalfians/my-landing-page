import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import BookingScreen from './screens/BookingScreen'
import ContactScreen from './screens/ContactScreen'
import FaqScreen from './screens/FaqScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/faq' component={FaqScreen} />
          <Route path='/contact' component={ContactScreen} />
          <Route path='/booking' component={BookingScreen} />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
    </Router>
  )
}

export default App
