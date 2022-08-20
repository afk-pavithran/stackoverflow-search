import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Search } from '../components'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function HomePage() {
  return (
  <Layout>
    <Search />
  </Layout>
  )
}

export default HomePage
