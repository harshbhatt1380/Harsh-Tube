import React from 'react'
import './Sidebar.css'
import home_icon from '../../assets/home_icon.jpg'
import game_icon from '../../assets/Game_icon.png'
import automobiles from '../../assets/automobiles.jpg'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blog.png'
import news from '../../assets/news.png'
import carryminati from '../../assets/carryminati.jpg'
import billg from '../../assets/billgates.jpg'
import bbkivines from '../../assets/bb ki vines.jpg'
import gatesmasher from '../../assets/Gatesmasher.jpg'
import wwe from '../../assets/wwe.png'



const Sidebar = ({sidebar, category,setCategory}) => {
    return(
        <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
            <div className="sortcut-links">
                <div className={`side-links ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                    
                    { <img src={home_icon} className='home_icon icons' alt=""/>}
                    <p>Home</p>
                </div>

                <div className={`side-link-gaming ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                <div>
                <img className='game-icon icons' src={game_icon} alt=""/>
                </div>
                    <p>Gaming</p>
                </div>

                <div className={`side-links ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                    <img className='automobiles icons' src={automobiles} alt=""/><p>Automobiles</p>
                </div>

                <div className={`side-links ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                    <img className='sports icons' src={sports} alt=""/><p>Sports</p>
                </div>

                <div className={`side-links ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                    <img className='entertainment icons' src={entertainment} alt=""/><p>Entertainment</p>
                </div>

                <div className={`side-links ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                    <img className='tech icons' src={tech} alt=""/><p>Technology</p>
                </div>

                <div className={`side-links ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                    <img className='music icons' src={music} alt=""/><p>Music</p>
                </div>

                <div className={`side-links ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                    <img className='blogs icons' src={blogs} alt=""/><p>Blogs</p>
                </div>

                <div className={`side-links ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                    <img className='news icons' src={news} alt=""/><p>News</p>
                </div>
            </div>
            <hr />

            <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-link">
                <img src={carryminati} alt="" /><p>Carryminati</p>
            </div>

            <div className="side-link">
                <img src={billg} alt="" /><p>Bill Gates</p>
            </div>

            <div className="side-link">
                <img src={wwe} alt="" /><p>WWE</p>
            </div>

            <div className="side-link">
                <img src={gatesmasher} alt="" /><p>Gates Smasher</p>
            </div>

            <div className="side-link">
                <img src={bbkivines} alt="" /><p>BB ki Vines</p>

            </div>
            </div>
        </div>
    )
}

export default Sidebar