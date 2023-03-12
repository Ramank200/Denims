import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Introduction from '../../Components/Introductio/Introduction'
import Navbar from '../../Components/Navbar/Navbar'
import styles from "./Homepage.module.css"

const Homepage = () => {
  return (<div className={styles.Homepage}>
     <Introduction/>
     <Footer/>
    </div>
  )
}

export default Homepage