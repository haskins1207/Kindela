import Nav from './components/Nav'
import Hero from './components/Hero'
import ProblemGrid from './components/ProblemGrid'
import Solution from './components/Solution'
import Features from './components/Features'
import Comparison from './components/Comparison'
import SavingsCalculator from './components/SavingsCalculator'
import SocialProof from './components/SocialProof'
import Pricing from './components/Pricing'
import IntegrationsSecurity from './components/IntegrationsSecurity'
import VideoDemo from './components/VideoDemo'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WalkthroughProvider from './components/WalkthroughProvider'
import './App.css'

export default function App() {
  return (
    <WalkthroughProvider>
      <Nav />
      <main>
        <Hero />
        <ProblemGrid />
        <Solution />
        <Features />
        <Comparison />
        <SavingsCalculator />
        <SocialProof />
        <Pricing />
        <IntegrationsSecurity />
        <VideoDemo />
        <FinalCTA />
      </main>
      <Footer />
    </WalkthroughProvider>
  )
}
