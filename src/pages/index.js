import styles from '@/styles/Home.module.css'
import Heads from '@/Components/Head/Head'
import Sales from '@/Components/Ultimatesale%/Ultimatesales'
import Simpleimages from '@/Components/Images/SimpleImages'
import Arrivals from '@/Components/Arrivals/Arrivals'
import Trending from '@/Components/Trendings/Trending'
import Featured from '@/Components/Featured/Featured'
import Ionic from '@/Components/Ionic/Ionic'
import Shop from '@/Components/Sportshop/Sportshop'
import Members from '@/Components/Memberships/MemberShip'
import Footer from '@/Components/Footer/Footer'


export default function Home() {
  return (
    <>
     <Heads title="Nike.Just Do it. Nike.com" description="Kids. Infant & Toddler Shoes. Kids Shoes. Kids Basketball Shoes. Kids Running Shoes. Nike delivers innovative products, experiences and services to inspire athletes."/>
     <div>
      <Sales />
      <Simpleimages />
      <Arrivals />
      <Trending />
      <Featured />
      <Ionic />
      <Shop />
      <Members />
      <Footer />
     </div>
    </>
  )
}
