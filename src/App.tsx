import Header from './components/Header'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import InvestmentProject from './components/InvestmentProject'
import ParticipationConditions from './components/ParticipationConditions'
import AgreementForm from './components/AgreementForm'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import './App.scss'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <Hero />
        <WhatWeDo />
        <InvestmentProject />
        <ParticipationConditions />
        <AgreementForm />
      </div>      
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App

