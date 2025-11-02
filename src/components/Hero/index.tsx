import heroImage from '../../assets/images/hero-cityscape.png'
import './style.scss'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">EAGLESEVEN</h1>
          <p className="hero-description text-text-medium">
          最先端のテクノロジーと堅実なリスク管理を融合し、経験豊富なプロフェッショナルトレーディングチームを擁しています。
          </p>
          <p className="hero-description text-text-medium">
          科学的かつ柔軟な戦略により多様な資産を運用し、従来の投資や貯蓄の概念を刷新。
          </p>
          <p className="hero-description text-text-medium">
          複雑な資産管理をシンプルかつ効率的にすることで、誰もが気軽に参加でき、安心して投資できるスマートなシステムの構築を目指しています。

          </p><br />
          <p className="hero-description text-text-medium">
          現在、アメリカを中心に100万人以上のユーザーにご利用いただき、管理資産総額は数十億ドル規模に達しています。
          </p>
          <p className="hero-description text-text-medium">
          このたび日本市場においても、Direct Market Access（ダイレクト・マーケット・アクセス）を核とした、プロフェッショナルな取引サービスの提供を正式に開始いたしました。
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

