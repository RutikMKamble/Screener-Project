import React from 'react'
import './LifeIns.css'
import CheckList from '../Asset/checklists.png'

const LifeIns = () => {
  return (
    <> 
      <div className='Life-ins-main-div'>
        <h3>Beginners guide to Term insurance</h3>
        <img src={CheckList} alt="" />
        <hr />
        <div>
          <h2>What’s the most important thing in your life?</h2>
          <p>9 out of 10 times, the answer is almost too obvious — “Family.” It could be your kids. It could be your parents. It could be your spouse. It could be anybody connected by blood. In fact, if I asked you, what would you do for the people you love? You’d probably say something like this — I’d give up my life to protect them.</p>
          <hr />
          <h2>What is Term Insurance</h2>
          <p>Imagine a world where you could potentially buy a product that could replace you. Okay, not you precisely, because that would be a bit silly. But what if you had a replica version of yourself that could earn like you and make money like you. Wouldn’t you jump on that opportunity? Or maybe pay an annual fee just so you could hold on to this person? You probably would. And a term insurance product does just that. It is your financial replica and it comes alive when you die.</p>
        </div>
      </div>
    </>
  )
}

export default LifeIns