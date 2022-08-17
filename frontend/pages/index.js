import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function HomePage() {
  return (
  <div>
    <div>Stack Overflow Search Tool</div>
    <input placeholder='search'/>
    <br />
    <button>Search</button>
  </div>
  )
}

export default HomePage
