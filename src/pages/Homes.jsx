import React from 'react'
import Home from '../components/home/Home'
import Collection from '../components/collection/Collection';
import BTrending from '../components/B_Trending/BTrending';
import Latest from '../components/latest/Latest';
import Follows from '../components/follows/Follows';
import Gallery from '../container/Gallery/Gallery';
// import Home from './components/home/Home';
import Categories from '../components/Categories/Categories';
import Trending from '../components/trending/Trending';
const Homes = () => {
  return (
    <div>
      <Home />
     <Categories />
     <Trending />
     <Collection />
     <BTrending />
     <Latest />
     <Follows />
     <Gallery />
    </div>
  )
}

export default Homes
