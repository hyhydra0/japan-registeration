import './style.scss'

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="contact-us-container">
        <h2 className="section-title">联系我们</h2>
        <p className="contact-question">有任何问题或意见吗？</p>
        <p className="contact-email">邮箱地址: info@eagleseven.com</p>

        <div className="offices-grid">
          <div className="office-card">
            <h3 className="office-title">芝加哥办事处</h3>
            <address className="office-address">
              <p>西杰克逊大道550号, 1400室</p>
              <p>伊利诺伊州芝加哥市, 邮编 60661</p>
            </address>
            <button className="directions-btn">获取驾车路线</button>
          </div>

          <div className="office-card">
            <h3 className="office-title">阿姆斯特丹办公室</h3>
            <address className="office-address">
              <p>称伊德街9/U</p>
              <p>荷兰阿姆斯特丹 1011 PZ</p>
            </address>
            <button className="directions-btn">获取驾车路线</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs

