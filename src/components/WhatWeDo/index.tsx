import IconSvg from '../IconSvg'
import './style.scss'

const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <div className="what-we-do-container">
        <h2 className="section-title">我们做什么</h2>
        <div className="what-we-do-grid">
          <div className="what-we-do-item">
            <div className="icon-wrapper">
              <IconSvg name="icon-trade" alt="Trade" className="icon" />
            </div>
            <h3 className="item-title">贸易</h3>
            <p className="item-description">
              我们在各个交易所使用专有资本执行上市产品和证券市场的交易，
              不承担第三方投资者的责任。我们对交易充满热情，探索新市场，
              开发新策略。
            </p>
          </div>
          <div className="what-we-do-item">
            <div className="icon-wrapper">
              <IconSvg name="icon-technology" alt="Technology" className="icon" />
            </div>
            <h3 className="item-title">技术</h3>
            <p className="item-description">
              我们自主开发的交易平台旨在满足竞争激烈的交易环境的需求，
              确保速度、创新和透明度。我们的技术支持在快速变化的市场中
              执行复杂的交易策略。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo

