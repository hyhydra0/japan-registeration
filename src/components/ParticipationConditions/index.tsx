import './style.scss'

const ParticipationConditions = () => {
  return (
    <section className="participation-conditions">
      <div className="participation-conditions-container">
        <h2 className="section-title">投资计划参与条件和保密条款</h2>
        
        <div className="conditions-section">
          <div className="subsection">
            <h3 className="subsection-title">一、参与条件</h3>
            <div className="subsection-content">
              <div className="condition-item">
                <h4 className="condition-number">1. 资格要求</h4>
                <ul className="condition-list">
                  <li>年满18岁或达到法定成年年龄</li>
                  <li>具有完全民事行为能力</li>
                  <li>拥有稳定的资金来源</li>
                  <li>愿意进行中长期投资</li>
                  <li>理解并同意本计划的相关政策</li>
                </ul>
              </div>
              <div className="condition-item">
                <h4 className="condition-number">2. 风险认知</h4>
                <ul className="condition-list">
                  <li>本计划旨在实现稳定回报，但市场波动可能导致投资损失</li>
                  <li>参与者需要具备一定的风险承受能力</li>
                  <li>投资决策需要冷静、理性，参与者需自行承担责任</li>
                  <li>请根据自身财务状况和投资目标做出明智决策</li>
                </ul>
              </div>
              <div className="condition-item">
                <h4 className="condition-number">3. 合规要求</h4>
                <ul className="condition-list">
                  <li>遵守相关法律法规和监管要求</li>
                  <li>按时提交必要的文件和资料</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">二、保密和信息保护</h3>
            <div className="subsection-content">
              <div className="condition-item">
                <h4 className="condition-number">1. 保密义务</h4>
                <ul className="condition-list">
                  <li>参与者需严格管理与本计划相关的信息</li>
                  <li>未经授权不得向第三方披露相关信息</li>
                </ul>
              </div>
              <div className="condition-item">
                <h4 className="condition-number">2. 信息安全管理</h4>
                <ul className="condition-list">
                  <li>请妥善管理您的账户和密码信息</li>
                  <li>定期更新密码，确保账户安全</li>
                </ul>
              </div>
              <div className="condition-item">
                <h4 className="condition-number">3. 信息泄露风险</h4>
                <ul className="condition-list">
                  <li>未经授权的信息泄露可能影响投资策略的执行</li>
                  <li>参与者需自行承担信息管理的责任</li>
                </ul>
              </div>
              <div className="condition-item">
                <h4 className="condition-number">4. 责任和对策</h4>
                <ul className="condition-list">
                  <li>管理方将采取适当措施处理违反保密义务的行为</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ParticipationConditions

