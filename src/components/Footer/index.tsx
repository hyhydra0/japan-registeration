import './style.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="contact-title">お問い合わせ</h2>

        <div className="contact-section">
          <p className="contact-prompt">ご質問やご意見などがございましたら、下記までお気軽にご連絡ください。</p>
          <p className="contact-email">メールアドレス: <a href="mailto:info@eagleseven.com">mail@eagleseven-jp.com</a></p>
        </div>

        <div className="office-locations">
          <div className="office-details">
            <h3 className="office-title">シカゴオフィス</h3>
            <p>550 West Jackson Blvd, Suite 1400</p>
            <p>Chicago, Illinois 60661, USA</p>
            <button className="driving-directions-btn">ルートを取得</button>
          </div>

          <div className="office-details">
            <h3 className="office-title">アムステルダムオフィス</h3>
            <p>Muiderstraat 9/U</p>
            <p>1011 PZ Amsterdam, The Netherlands</p>
            <button className="driving-directions-btn">ルートを取得</button>
          </div>
        </div>

        <p className="regulatory-text">
        Eagle Seven Europe B.V. は、オランダ金融市場庁（AFM）およびオランダ中央銀行（De Nederlandsche Bank）の監督を受けています。
        Eagle Seven Europe の登録書類の写しをご希望の方は、コンプライアンス部門（ <a href="mailto:EUcompliance@eagleseven.com">EUcompliance@eagleseven.com</a>）までご連絡ください。
        </p>
      </div>
    </footer>
  )
}

export default Footer

