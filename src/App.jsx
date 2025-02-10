import './App.css'
import data from "../public/data.json"
import { useEffect, useRef } from 'react'

function App() {

  const bar1Ref = useRef(null)
  const bar2Ref = useRef(null)
  const bar3Ref = useRef(null)
  const bar4Ref = useRef(null)
  const bar5Ref = useRef(null)
  const bar6Ref = useRef(null)
  const bar7Ref = useRef(null)

  useEffect(()=>{
    console.log(data[0].amount)
    bar1Ref.current.style.height = `${data[0].amount}%`
    bar2Ref.current.style.height = `${data[1].amount}%`
    bar3Ref.current.style.height = `${data[2].amount}%`
    bar4Ref.current.style.height = `${data[3].amount}%`
    bar5Ref.current.style.height = `${data[4].amount}%`
    bar6Ref.current.style.height = `${data[5].amount}%`
    bar7Ref.current.style.height = `${data[6].amount}%`
  },[])
  

  return (
     <div className="background">
    <div className="upper-box">
      <div className="upper-box-left-section">
        <div className="upper-box-left-section-up">
          <h6 className="my-balance-text">My balance</h6>
        </div>
        <div className="upper-box-left-section-down">
          <h1 className="my-balance-text-num">$921.48</h1>
        </div>
      </div>
      <div className="upper-box-right-section">
        <img src=""></img>
      </div>
    </div>
    <div className="lower-box">
      <div className="spending-last7days-text">
        <h2 className="spending-last7days-text-text">Spending - Last 7 days</h2>
      </div>
      <div className="grid-container">
        <div className="bar1">
          <div ref={bar1Ref} className="bar1-data"></div>
        </div>
        <div  className="bar2">
          <div ref={bar2Ref} className="bar2-data"></div>
        </div>
        <div className="bar3">
          <div ref={bar3Ref} className="bar3-data"></div>
        </div>
        <div  className="bar4">
          <div ref={bar4Ref} className="bar4-data"></div>
        </div>
        <div className="bar5">
          <div ref={bar5Ref} className="bar5-data"></div>
        </div>
        <div className="bar6">
          <div ref={bar6Ref} className="bar6-data"></div>
        </div>
        <div className="bar7">
          <div ref={bar7Ref} className="bar7-data"></div>
        </div>
        <div className="text1">Mon</div>
        <div className="text2">Tue</div>
        <div className="text3">Wed</div>
        <div className="text4">Thu</div>
        <div className="text5">Fri</div>
        <div className="text6">Sat</div>
        <div className="text7">Sun</div>
      </div>
      <div className="div-bar-area">
        <div className="div-bar"></div>
      </div>
      <div className="total-this-month">
        <div className="upper-total-area">
          <h6 className="upper-total-area-text">Total this month</h6>
        </div>
        <div className="lower-total-area">
          <div className="lower-total-left-area">
            <h1 className="lower-total-left-area-text">$478.33</h1>
          </div>
          <div className="lower-total-right-area">
            <div className="compare-to-last-month-num">
              <h6 className="compare-to-last-month-num-text">+2.4%</h6>
            </div>
            <div className="compare-to-last-month-text">
              <h6 className="compare-to-last-month-text-text">from last month</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
     </div>
  )
}

export default App
