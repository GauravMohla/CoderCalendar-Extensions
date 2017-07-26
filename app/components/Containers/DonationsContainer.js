var React = require("react");

var Donations = React.createClass({
    onClickBeerDonationHandler: function(){
        chrome.tabs.create({ url: "https://imjo.in/rbNqse2"});
    },
    onClickAnyDonationHandler: function(){
        chrome.tabs.create({ url: "https://www.instamojo.com/@nishanthvijayan"});
    },
    onClickImageHandler: function(){
        chrome.tabs.create({ url: "https://github.com/nishanthvijayan"});
    },
    onClickFeedbackHandler: function(){
        chrome.tabs.create({ url: "https://goo.gl/forms/vgVJOQKwooO2pur13"});
    }
    render: function(){
        return(
            <div className = 'donations-container' style={{height: 400}}>
                <div className="top-title">
                    <div className='title'><h3>Buy me a Beer!</h3></div>
                </div>
                <div className="message">
                    <img src="../img/nishanth.jpg" className="circle-image" style={{height: 80}} onClick={this.onClickImageHandler}/>
                    <br/><br/>
                    <p>
                    If you find this extension helpful, I urge you to make a small donation
                    to help me keep this awesome product running.
                    Thank you!
                    </p>
                    <br/><br/>
                    <a className="donation-button" onClick={this.onClickBeerDonationHandler}>Buy me a Beer! (₹200)</a>
                    <a className="donation-button" onClick={this.onClickAnyDonationHandler}>Donate any amount</a>
                </div>
                <br/><br/><br/>
                <div className="message">
                    <hr/>
                    <br/>
                    Complaints? Suggestions for Improvement? Feedback?<br/>
                    Let me know
                    <span onClick={this.onClickFeedbackHandler} style={{"textDecoration": "underline", "cursor": "pointer"}}> here</span>
                    <br/>
                </div>
            </div>
        );
    }
});

module.exports = Donations;
