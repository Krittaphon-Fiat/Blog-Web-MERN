import "./header.css"

export default function header() {
  return (
    <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <img 
          className="headerImg" 
          src="https://images.pexels.com/photos/28539583/pexels-photo-28539583/free-photo-of-majestic-mountain-peaks-at-sunrise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="" 
        />
      
    </div>
  )
}
