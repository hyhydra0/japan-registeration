import { useState } from 'react'
import IconSvg from '../IconSvg'
import './style.scss'

const AgreementForm = () => {
  const [agreements, setAgreements] = useState({
    agreement1: true,
    agreement2: true,
    agreement3: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profession: '',
    age: '',
    investmentAmount: '',
    lineDisplayName: '',
    inquiry: '',
  })

  const handleAgreementChange = (key: keyof typeof agreements) => {
    setAgreements(prev => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', { agreements, formData })
    // Handle form submission here
  }

  return (
    <section className="agreement-form">
      <div className="agreement-form-container">
        <h2 className="form-instruction">请在同意条款前仔细确认所有细节。</h2>
        <p className="form-prompt">请同意以下条款和条件：</p>
        
        <div className="agreements-section">
          <div className="agreement-item">
            <div className="agreement-text">
              我同意参与美国银行一级市场交易，严格遵守交易规则。
              违反规则可能导致列入黑名单。
            </div>
            <div className="agreement-options">
              <button
                type="button"
                className={`option-btn ${agreements.agreement1 ? 'active' : ''}`}
                onClick={() => handleAgreementChange('agreement1')}
              >
                {agreements.agreement1 && <IconSvg name="icon-check" alt="Checked" className="check-icon" />}
                <span>是</span>
              </button>
              <button
                type="button"
                className={`option-btn ${!agreements.agreement1 ? 'active' : ''}`}
                onClick={() => handleAgreementChange('agreement1')}
              >
                <span>否</span>
              </button>
            </div>
          </div>

          <div className="agreement-item">
            <div className="agreement-text">
              我同意从净利润中支付15%的运营费用。
            </div>
            <div className="agreement-options">
              <button
                type="button"
                className={`option-btn ${agreements.agreement2 ? 'active' : ''}`}
                onClick={() => handleAgreementChange('agreement2')}
              >
                {agreements.agreement2 && <IconSvg name="icon-check" alt="Checked" className="check-icon" />}
                <span>是</span>
              </button>
              <button
                type="button"
                className={`option-btn ${!agreements.agreement2 ? 'active' : ''}`}
                onClick={() => handleAgreementChange('agreement2')}
              >
                <span>否</span>
              </button>
            </div>
          </div>

          <div className="agreement-item">
            <div className="agreement-text">
              我同意签署保密协议，以保护交易策略和资产信息，
              旨在降低风险并增强竞争力。
            </div>
            <div className="agreement-options">
              <button
                type="button"
                className={`option-btn ${agreements.agreement3 ? 'active' : ''}`}
                onClick={() => handleAgreementChange('agreement3')}
              >
                {agreements.agreement3 && <IconSvg name="icon-check" alt="Checked" className="check-icon" />}
                <span>是</span>
              </button>
              <button
                type="button"
                className={`option-btn ${!agreements.agreement3 ? 'active' : ''}`}
                onClick={() => handleAgreementChange('agreement3')}
              >
                <span>否</span>
              </button>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">姓名 *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="在此输入您的详细信息"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">电子邮箱地址 *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="profession">职业</label>
              <input
                type="text"
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleInputChange}
                placeholder="在此输入您的详细信息"
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">年龄</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="在此输入您的详细信息"
              />
            </div>
            <div className="form-group">
              <label htmlFor="investmentAmount">计划投资金额</label>
              <input
                type="text"
                id="investmentAmount"
                name="investmentAmount"
                value={formData.investmentAmount}
                onChange={handleInputChange}
                placeholder="在此输入您的详细信息"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lineDisplayName">线路提示名称</label>
              <input
                type="text"
                id="lineDisplayName"
                name="lineDisplayName"
                value={formData.lineDisplayName}
                onChange={handleInputChange}
                placeholder="在此输入您的详细信息"
              />
            </div>
          </div>
          <div className="form-group full-width">
            <label htmlFor="inquiry">
              您的咨询/请求详情（请包括您的投资经验、目标收益、当前状况等）
            </label>
            <textarea
              id="inquiry"
              name="inquiry"
              value={formData.inquiry}
              onChange={handleInputChange}
              rows={6}
              placeholder="在此输入您的详细信息"
            />
          </div>
          <button type="submit" className="submit-btn">发送</button>
        </form>
      </div>
    </section>
  )
}

export default AgreementForm

