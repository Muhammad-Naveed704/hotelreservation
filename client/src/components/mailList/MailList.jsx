import "./mailList.css"


const MailList = () => {
  return (
    
    <div className="mail">
        <h1 className="mailTitle"> save time save money</h1>
        <span className="mailDesc">Signup and well send</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
        </div>
    </div>
    
  )
}

export default MailList