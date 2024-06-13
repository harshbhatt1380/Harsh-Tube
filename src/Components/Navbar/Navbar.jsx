import React, { useRef,useState } from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu_icon1.jpg'
import logo from '../../assets/Logo1.png'
import search_icon from '../../assets/search_icon.png'
import upload_icon from '../../assets/upload_icon.png'
import more_icon from '../../assets/more_icon.png'
import notification_icon from '../../assets/notification_icon.png'
import profile_icon from '../../assets/profile_icon.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = ({setSidebar}) => {
    const textToSearch=useRef(null)
    const [showItems,setShowItems]=useState(false)

    const buttonClickHandler=()=>{
        console.log(textToSearch.current.value)
        const searchedText=`https://www.youtube.com/results?search_query=${encodeURIComponent(textToSearch.current.value)}`
        
        window.location.href=searchedText



    }

   

    const handleClick=()=>{
        setShowItems(!showItems)
    }

    return(
        <nav className='flex-div'>
            <div className='nav-left flex-div'>
                <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt=""/>
                <Link to ='/'><img className='logo' src={logo} alt=""/></Link>
                <span className='appName'>HarshTube</span>

        </div>

        <div className="nav-middle flex-div">
            <div className="search-box flex-div">
            <input ref={textToSearch}  type="text" placeholder='Search'/>
            <img src={search_icon} alt="" />
            
            </div>
            <button className='searchButton' onClick={buttonClickHandler} >Search</button>
        </div>

        <div className="nav-right flex-div">
            <img src={upload_icon} alt="" />
            <img src={more_icon} alt="" />
            <img src={notification_icon} alt="" />
            <img src={profile_icon} onClick={handleClick} className='user-icon' alt="" />

            {showItems && (
                <div className='ham'>
                    <h2 className='accounts'>Accounts</h2>
                    <div className='abc'>
                    <div className='ham-con-two'> 
                    <img className='modiImage' src="https://images.hindustantimes.com/img/2022/10/28/1600x900/ANI-20221026015-0_1666776678643_1666776678643_1666933207563_1666933207563.jpg" />
                    </div>
                    <div><div>Arvind Kejriwal</div>
                    <div>@user-pkrht3wz-gb</div></div>
                    
                    </div>

                    <div className='abc'>
                    <div className='ham-con-two'> 
                    <img className='modiImage' src="https://wallpapercave.com/wp/wp6727826.jpg" />
                    </div>
                    <div><div>Narendra Modi</div>
                    <div>@user-rkrht6wz-gb</div></div>
                    
                    </div>


                    <div className='abc'>
                    <div className='ham-con-two'> 
                    <img className='modiImage' src="https://th.bing.com/th/id/OIP.mDO7IKkJB9kz4F7DquWECwHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                    </div>
                    <div><div>Rahul Gandhi</div>
                    <div>@user-htrht3wz-gb</div></div>
                    
                    </div>

                    {/* <div className='abc'>
                    <div className='ham-con-two'> 
                    <img className='modiImage' src="https://akm-img-a-in.tosshub.com/sites/dailyo/fb_feed_images/story_image/201808/mamata-banerjee-1820_080818025013.jpg" />
                    </div>
                    <div><div>Mamta Banarjee</div>
                    <div>@user-htrht3wz-gb</div></div>
                    
                    </div> */}
                  
                  
                </div>
            )}
        </div>
        </nav>
    )
}

export default Navbar




