import { useState } from 'react'
import IconSvg from '../IconSvg'
import { submitForm } from '../../services/formService'
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

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitError, setSubmitError] = useState('')

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
    // Clear error when user starts typing
    if (submitError) {
      setSubmitError('')
    }
  }

  const validateForm = (): boolean => {
    // Check agreements
    if (!agreements.agreement1 || !agreements.agreement2 || !agreements.agreement3) {
      setSubmitError('すべての条項と条件に同意してください')
      return false
    }

    // Validate name
    if (!formData.name || formData.name.trim() === '') {
      setSubmitError('名前を入力してください')
      return false
    }

    // Validate email
    if (!formData.email || formData.email.trim() === '') {
      setSubmitError('メールアドレスを入力してください')
      return false
    }

    // Validate profession
    if (!formData.profession || formData.profession.trim() === '') {
      setSubmitError('職業を入力してください')
      return false
    }

    // Validate age
    if (!formData.age || formData.age.trim() === '') {
      setSubmitError('年齢を入力してください')
      return false
    }

    // Validate investment amount
    if (!formData.investmentAmount || formData.investmentAmount.trim() === '') {
      setSubmitError('計画投資額を入力してください')
      return false
    }

    // Validate inquiry
    if (!formData.inquiry || formData.inquiry.trim() === '') {
      setSubmitError('お問い合わせ・リクエストの詳細を入力してください')
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitMessage('')
    setSubmitError('')

    // Validate form before submission
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await submitForm({
        user_name: formData.name,
        email: formData.email,
        job: formData.profession,
        age: formData.age,
        amount: formData.investmentAmount,
        ask_info: formData.inquiry
      })
      setSubmitMessage(response.message || 'フォーム送信が完了しました！')
      // Reset form if needed
      setFormData({
        name: '',
        email: '',
        profession: '',
        age: '',
        investmentAmount: '',
        lineDisplayName: '',
        inquiry: '',
      })
      setAgreements({
        agreement1: false,
        agreement2: false,
        agreement3: false,
      })
    } catch (error: any) {
      console.error('Form submission error:', error)
      setSubmitError(error.response?.data?.message || '送信に失敗しました。しばらくしてから再試行してください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="agreement-form">
      <div className="agreement-form-container">
        <div className="w-full">
          <h2 className="form-instruction">条項に同意する前に、すべての詳細を慎重に確認してください</h2>
        <div className="agreements-section">
          <p className="form-prompt">以下の条項と条件に同意してください：</p>
          <div className="agreement-item">
            <div className="agreement-text">
              アメリカ銀行プライマリーマーケット取引に参加し、取引ルールを厳守することに同意します。
              ルール違反はブラックリストに登録される可能性があります。
            </div>
            <div className="agreement-options">
              <div
                className={`flex items-center gap-2 ${agreements.agreement1 ? 'active' : ''}`}
                onClick={() => handleAgreementChange('agreement1')}
              >
                {agreements.agreement1 ? (
                  <IconSvg name="icon-check" alt="Checked" className="check-icon" />
                ) : (
                  <IconSvg name="icon-square-empty" alt="Unchecked" className="check-icon" />
                )}
                <span>はい</span>
              </div>
              <div
                className={`flex items-center gap-2 ${!agreements.agreement1 ? 'active' : ''}`}
                onClick={() => handleAgreementChange('agreement1')}
              >
                {!agreements.agreement1 ? (
                  <IconSvg name="icon-check" alt="Checked" className="check-icon" />
                ) : (
                  <IconSvg name="icon-square-empty" alt="Unchecked" className="check-icon" />
                )}
                <span>いいえ</span>
              </div>
            </div>
          </div>

          <div className="agreement-item">
            <div className="agreement-text">
              純利益から15%の運営費を支払うことに同意します。
            </div>
            <div className="agreement-options">
              <div
                className={`flex items-center gap-2 ${agreements.agreement2 ? 'active' : ''}`}
                onClick={() => handleAgreementChange('agreement2')}
              >
                {agreements.agreement2 ? (
                  <IconSvg name="icon-check" alt="Checked" className="check-icon" />
                ) : (
                  <IconSvg name="icon-square-empty" alt="Unchecked" className="check-icon" />
                )}
                <span>はい</span>
              </div>
              <div
                className={`flex items-center gap-2 ${!agreements.agreement2 ? 'active' : ''}`}
                onClick={() => handleAgreementChange('agreement2')}
              >
                {!agreements.agreement2 ? (
                  <IconSvg name="icon-check" alt="Checked" className="check-icon" />
                ) : (
                  <IconSvg name="icon-square-empty" alt="Unchecked" className="check-icon" />
                )}
                <span>いいえ</span>
              </div>
            </div>
          </div>

          <div className="agreement-item">
            <div className="agreement-text">
              取引戦略と資産情報を保護するため、機密保持契約に署名することに同意します。
              リスクを軽減し、競争力を高めることが目的です。
            </div>
            <div className="agreement-options">
              <div
                className={`flex items-center gap-2 ${agreements.agreement3 ? 'active' : ''}`}
                onClick={() => handleAgreementChange('agreement3')}
              >
                {agreements.agreement3 ? (
                  <IconSvg name="icon-check" alt="Checked" className="check-icon" />
                ) : (
                  <IconSvg name="icon-square-empty" alt="Unchecked" className="check-icon" />
                )}
                <span>はい</span>
              </div>
              <div
                className={`flex items-center gap-2 ${!agreements.agreement3 ? 'active' : ''}`}
                onClick={() => handleAgreementChange('agreement3')}
              >
                {!agreements.agreement3 ? (
                  <IconSvg name="icon-check" alt="Checked" className="check-icon" />
                ) : (
                  <IconSvg name="icon-square-empty" alt="Unchecked" className="check-icon" />
                )}
                <span>いいえ</span>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">氏名 *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="詳細情報をご入力ください"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">メールアドレス *</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="profession">職業 *</label>
              <input
                type="text"
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleInputChange}
                placeholder="詳細情報をご入力ください"
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">年齢 *</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="詳細情報をご入力ください"
              />
            </div>
            <div className="form-group">
              <label htmlFor="investmentAmount">計画投資額 *</label>
              <input
                type="text"
                id="investmentAmount"
                name="investmentAmount"
                value={formData.investmentAmount}
                onChange={handleInputChange}
                placeholder="詳細情報をご入力ください"
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="lineDisplayName">线路提示名称</label>
              <input
                type="text"
                id="lineDisplayName"
                name="lineDisplayName"
                value={formData.lineDisplayName}
                onChange={handleInputChange}
                placeholder="在此输入您的详细信息"
              />
            </div> */}
          </div>
          <div className="form-group">
            <label htmlFor="inquiry">
              お問い合わせ・リクエストの詳細（投資経験、目標収益、現在の状況などをご記入ください）*
            </label>
            <textarea
              id="inquiry"
              name="inquiry"
              value={formData.inquiry}
              onChange={handleInputChange}
              rows={6}
              placeholder="詳細情報をご入力ください"
            />
          </div>
          {submitMessage && (
            <div className="submit-message">
              {submitMessage}
            </div>
          )}
          {submitError && (
            <div className="submit-error">
              {submitError}
            </div>
          )}
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? '送信中...' : '送信'}
          </button>
        </form></div>
      </div>
    </section>
  )
}

export default AgreementForm

