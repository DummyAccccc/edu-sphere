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
            <section>
                <Hero02 />
            </section>
            <section>
                <FeaturesSection />
            </section>
            <section >
                <Cards />
            </section>
            <section >
                <Footer />
            </section>
            {/* <section >
                <UserGithub />
            </section> */}

            <section className='mt-30'>
                <Dashboard02 />
            </section>



        </main>
    )
}

export default HomePage
