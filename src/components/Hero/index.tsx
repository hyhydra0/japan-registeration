import heroImage from '../../assets/images/hero-cityscape.png'
import './style.scss'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">EAGLESEVEN</h1>
          <p className="hero-description">
            EAGLESEVEN是一家专注于为美国和全球金融市场提供流动性的私人专有交易公司。
            我们运用先进的技术、稳健的风险管理以及熟练的交易团队，
            采用灵活的策略跨越各种资产类别。
          </p>
        </div>
        <div className="hero-image-wrapper">
          <img src={heroImage} alt="Modern cityscape" className="hero-image" />
        </div>
      </div>
    </section>
  )
}

export default Hero

