import React from 'react'
import Navbar from './Navbar'
import HeroImg2 from './HeroImg2'
import Footer from './Footer'
import Form from './Form'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="Contact Page" text="Let's have a chat" />
            <Form/>
            <Footer />
        </div>

    )
}

export default Contact