import IconSvg from '../IconSvg'
import './style.scss'

const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <div className="what-we-do-container">
        <h2 className="section-title">サービス内容</h2>
        <div className="what-we-do-grid">
          <div className="what-we-do-item">
            <div className="icon-wrapper">
              <IconSvg name="icon-trade" alt="Trade" className="icon" />
            </div>
            <h3 className="item-title">投資戦略</h3>
            <p className="item-description">
            投資への情熱を原動力に、新たな市場機会を開拓し、革新的な戦略を構築しています。新興市場の成長ポテンシャルを的確に捉え、高い運用効率を追求。
            短期売買では資金の流動性を高め、長期運用では複利効果を最大限に活かす「攻守両面」のアプローチにより、短期的なチャンスを逃さず、長期的かつ安定した資産成長を実現します。
            </p>
          </div>
          <div className="what-we-do-item">
            <div className="icon-wrapper">
              <IconSvg name="icon-technology" alt="Technology" className="icon" />
            </div>
            <h3 className="item-title">テクノロジー</h3>
            <p className="item-description">
            弊社独自の取引プラットフォームは、変化の激しい市場環境においても、
            スピード・革新性・透明性・正確性を徹底的に追求した取引体験を提供します。

            高度なアルゴリズム取引からダイレクトアクセスまで幅広く対応し、
            多くの取引は人手を介さず、最先端のプログラムによって極めて短時間で発注・マッチング・約定が完結します。

            この仕組みは、現代の量的取引およびアルゴリズム取引を支える中核的インフラであり、
            多様かつ複雑な戦略を高精度に実行し、変動の激しい現代市場でも確かな優位性を発揮します。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo

