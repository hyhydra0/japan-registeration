import './style.scss'

const InvestmentProject = () => {
  return (
    <section className="investment-project">
      <div className="investment-project-container">
        <h2 className="section-title text-text-primary">第5期退職保障投資プロジェクト</h2>
        <div className="project-content">
          <div className="project-details">
            <p className="detail-item">
              <strong>実施期間：</strong>2025年9月〜2026年1月
            </p>
            <p className="detail-item">
              <strong>取引戦略：</strong>新規公開株式（IPO）、プレマーケット取引（Pre-market trading）、
              ディスカウント取引（Discount trading）、店頭取引（OTC）、人工知能量化管理（AI Quantitative Management）、
              ブロック取引（Block trading）
            </p>
            <p className="detail-item">
              <strong>予想収益：</strong>元本の500%超
            </p>
            <p className="disclaimer">
              本プロジェクトは多様な投資方法を通じて安定かつ効率的なリターンを実現することを目的としています。
              すべての参加者に、関連するリスクと条件を十分に理解し、
              各自の判断に基づいて独立した投資判断を行うよう強く促しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InvestmentProject

