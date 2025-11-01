import './style.scss'

const InvestmentProject = () => {
  return (
    <section className="investment-project">
      <div className="investment-project-container">
        <h2 className="section-title">第五期退休保障投资项目</h2>
        <div className="project-content">
          <div className="project-details">
            <p className="detail-item">
              <strong>实施期间：</strong>2025年9月至2026年1月
            </p>
            <p className="detail-item">
              <strong>交易策略：</strong>首次公开募股（IPO）、盘前交易（Pre-market trading）、
              折价交易（Discount trading）、场外交易（OTC）、人工智能量化管理（AI Quantitative Management）、
              大宗交易（Block trading）
            </p>
            <p className="detail-item">
              <strong>预期收益：</strong>超过500%本金
            </p>
            <p className="disclaimer">
              本计划旨在通过多样化的投资方法实现稳定高效的回报。
              我们敦促所有参与者充分了解相关风险和条款，
              并根据自己的判断做出独立的投资决策。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InvestmentProject

