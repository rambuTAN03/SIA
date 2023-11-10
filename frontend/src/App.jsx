
import NavBar from './components/NavBar';
import MessageFab from './components/MessageFab';

import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

function App() {

  return (

    <>

      <NavBar />

      <MessageFab />

      <div className="content" style={{ marginTop: '2.9rem' }}>

        <div className="bannerCard">

          <h1>Wash Your Stress Away!</h1>
          <p>
            Wash your stress away, one load at a time,
            because every laundry day is a fresh start.
          </p>

        </div>

        <div className="wave">
        </div>

      </div>

      <div className="content2" style={{ marginTop: '2.9rem' }}>

        <div className='infocard'>

          <h1>About</h1>
          <p className="m-1">
            VSP Laundry Shop was founded in [Year] by a group of laundry enthusiasts who shared a
            common vision: to provide a comprehensive and customer-centric laundry experience.
            Their passion for laundry stemmed from the belief that doing laundry should be easy, efficient,
            and accessible to everyone.
            With that aspiration, VSP Laundry Shop was born.
          </p>

        </div>

        <div className="rightcard">
          <div className="rightcard2"></div>
        </div>

        <div className="wave2">
        </div>

      </div>


      <div className="content3" style={{ marginTop: '2.9rem' }}>

        <div className="faq">

          <h1>FAQs</h1>

          <Panel className='faqPanel' header="What are the services you offer?" toggleable collapsed='false'>
            <p className="m-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Panel>

          <br />

          <Panel className='faqPanel' header="What kind of items do you cater for washing?" toggleable collapsed='false'>
            <p className="m-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Panel>

          <br />

          <Panel className='faqPanel' header="What are your opening hours?" toggleable collapsed='false'>
            <p className="m-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Panel>

          <br />

          <Panel className='faqPanel' header="How many days will I receive my items back?" toggleable collapsed='false'>
            <p className="m-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Panel>

        </div>

        <div className="wave3">
        </div>
        
      </div>

      <div className="footnote">
        <h1>Vsp Laundry Shop</h1>
        <h2>Quezon Street, Panabo City, Davao Region, 8105</h2>
        <h2>Contact Number na wala ko kabalo</h2>
      </div>

    </>
  )
}

export default App
