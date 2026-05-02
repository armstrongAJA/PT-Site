import { useTheme } from '../../context/ThemeContext'
import Body from '../../components/molecules/Body/Body'
import gymBackground from '../../assets/images/Photos/gym_background.png'
import './HomePage.css'

function HomePage() {
  const theme = useTheme()

  return (
    <main className="home-page">
      <section id="about-us">
        <Body>
          <div>
            <h1>About Us</h1>
            <p>
              At {theme.businessName}, we believe fitness should be simple,
              sustainable, and built around you. No fads, no shortcuts—just proven
              training methods, tailored guidance, and consistent support to help
              you achieve real, lasting results.
            </p>
            <p>
              Whether you're just starting your fitness journey or looking to break
              through a plateau, our approach is focused on understanding your
              goals, your lifestyle, and what truly motivates you. Every programme
              is personalised to ensure you’re not just working hard, but working
              smart.
            </p>
            <p>
              At the core of {theme.businessName} is accountability and support.
              You won’t be left guessing what to do next—we’re with you every step
              of the way, tracking progress, making adjustments, and keeping you
              focused.
            </p>
          </div>
        </Body>
      </section>
{/* Comment the image out for now
      <div className="home-page__hero">
        <img src={gymBackground} alt="Gym background" />
      </div>
*/}
      <section id="pricing">
        <Body>
          <div>
            <h1>Pricing</h1>
            <p>
              Flexible coaching options are available based on your goals,
              schedule, and support level. Choose a coaching plan designed to keep
              you progressing consistently and sustainably.
            </p>
            <p>
              Every pricing option includes personalised programming, progress
              tracking, and practical guidance so you always know exactly what to
              focus on next.
            </p>
          </div>
        </Body>
      </section>

      <section id="contact-us">
        <Body>
          <div>
            <h1>Contact Us</h1>
            <p>
              Ready to get started with {theme.businessName}? Reach out to discuss
              your goals and we&apos;ll help you choose the right next step.
            </p>
            <p>
              Send an enquiry and we&apos;ll get back to you with available options,
              recommendations, and onboarding details.
            </p>
          </div>
        </Body>
      </section>
    </main>
  )
}

export default HomePage
