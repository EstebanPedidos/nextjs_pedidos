

 import Head from 'next/head';
//Components
 import { Layout } from 'layout/Layout';
 import { HomeSite } from 'pages/Home/homepage';
 import styles from '../styles/Home.module.css';


export default function HomePage() {

  return (
    <Layout>
		  <HomeSite />
	  </Layout>
    
	);
}
