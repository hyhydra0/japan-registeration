import './style.scss'

const ParticipationConditions = () => {
  return (
    <section className="participation-conditions">
      <div className="participation-conditions-container">
        <h2 className="section-title">投資プラン参加条件および機密保持条項</h2>
        
        <div className="conditions-section">
          <div className="subsection">
            <div className="subsection-title">一、参加条件</div>
            <div className="subsection-content">
              <div className="condition-item">
                <h4 className="condition-number">1. 資格要件</h4>
                <ul className="condition-list">
                  <li>18歳以上または法定成人年齢に達していること</li>
                  <li>完全な民事行為能力を有すること</li>
                  <li>安定した資金源を所有していること</li>
                  <li>中長期投資を行う意思があること</li>
                  <li>本プランの関連ポリシーを理解し同意すること</li>
                </ul>
              </div>
              <div className="condition-item">
                <h4 className="condition-number">2. リスク認識</h4>
                <ul className="condition-list">
                  <li>本プランは安定したリターンの実現を目的としていますが、市場変動により投資損失が発生する可能性があります</li>
                  <li>参加者は一定のリスク耐性を備えている必要があります</li>
                  <li>投資判断は冷静かつ理性的に行い、参加者は自己責任を負う必要があります</li>
                  <li>自身の財務状況と投資目標に基づいて賢明な判断を行ってください</li>
                </ul>
              </div>
              <div className="condition-item">
                <h4 className="condition-number">3. コンプライアンス要件</h4>
                <ul className="condition-list">
                  <li>関連する法規制および規制要件を遵守すること</li>
                  <li>必要な書類および資料を期日通りに提出すること</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">二、機密保持と情報保護</h3>
            <div className="subsection-content">
              <div className="condition-item">
                <h4 className="condition-number">1. 機密保持義務</h4>
                <ul className="condition-list">
                  <li>参加者は本プランに関連する情報を厳重に管理する必要があります</li>
                  <li>許可なく第三者に情報を開示してはなりません</li>
                </ul>
              </div>
              <div className="condition-item">
                <h4 className="condition-number">2. 情報セキュリティ管理</h4>
                <ul className="condition-list">
                  <li>アカウントおよびパスワード情報を適切に管理してください</li>
                  <li>パスワードを定期的に更新し、アカウントのセキュリティを確保してください</li>
                </ul>
              </div>
              <div className="condition-item">
                <h4 className="condition-number">3. 情報漏洩リスク</h4>
                <ul className="condition-list">
                  <li>許可されていない情報漏洩は投資戦略の実行に影響を与える可能性があります</li>
                  <li>参加者は情報管理の責任を自己負担する必要があります</li>
                </ul>
              </div>
              <div className="condition-item">
                <h4 className="condition-number">4. 責任と対策</h4>
                <ul className="condition-list">
                  <li>管理側は機密保持義務違反に対して適切な措置を講じます</li>
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

