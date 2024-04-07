import React from 'react'

import HomeNav from './HomeNav'
import Hero from './Hero'
import Hero02 from './Hero02'
import Cards from './Cards'
import Footer from './Footer'
import FeaturesSection from './FeaturesSection'
import UserGithub from '../Api/UserGithub'
import Dashboard02 from './Dashboard02'

const HomePage = () => {
    return (
        <main >
            <HomeNav />
            <section>
                <Hero />
            </section>
            <section id='aboutus'>
                <Hero02 />
            </section>
            <section >
                <div className="container text-black text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Features</h2>
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida justo eget fermentum pretium.</p>
                </div>
                <FeaturesSection id='features'  />
            </section>
            {/* <section className='mt-20'>
                <Cards />
            </section> */}
            <section >
                <Footer />
            </section>
            <section >
                <UserGithub idd='aditya-gawali' />
            </section>

            <section className='mt-30'>
                <Dashboard02 />
            </section>



        </main>
    )
}

export default HomePage
