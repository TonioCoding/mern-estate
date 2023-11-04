//imports
import { Link } from 'react-router-dom'

//main function
const About = () => {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>About Sell & Tell Estates</h1>
      <br />
      <p className='mb-4 text-slate-700'>Welcome to Sell and Tell Estates, your trusted partner in the world of real estate. At Sell and Tell Estates, we are dedicated to helping you buy, sell, or invest in properties with confidence and transparency. Our mission is to provide a seamless and informative real estate experience, guiding you through the complexities of the market, and ensuring that your real estate goals are not just met, but exceeded.
        <br />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <br />
          Sell and Tell Estates is more than just a real estate company; we are your expert advisors, committed to turning your real estate dreams into reality. Whether you're a first-time homebuyer, a seasoned investor, or looking to list your property, our team of experienced professionals is here to assist you every step of the way. Our goal is to create a supportive and informed community of buyers and sellers, empowering you with 
          knowledge and insight to make informed decisions. We believe that the key to successful real estate transactions is communication, trust, and personalized service, and that's precisely what Sell and Tell Estates brings to the table.
          <br />
          <hr className="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>
          <br />
          As we embark on this real estate journey together, we invite you to explore our website, get to know our team, and discover the wealth of resources we offer. At Sell and Tell Estates, we're not just about buying and selling properties; we're about building relationships, providing value, and making your real estate experience memorable and rewarding. Thank you for considering us as your partners in the real estate world.
      </p>
      <div className="text-center">
        <Link to={'/search'}>
          <button className="text-xl text-white bg-green-700 border 
          rounded-lg p-2 shadow-lg hover:bg-green-500">Start selling and telling!
          </button>
        </Link>
      </div>
    </div>
  )
}

export default About