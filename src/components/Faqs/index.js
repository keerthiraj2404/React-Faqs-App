// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="app-container">
      <div className="faqs-card-container">
        <h1 className="heading">FAQ’s</h1>
        <ul className="faqs-list-container">
          {faqsList.map(eachFaq => (
            <FaqItem key={eachFaq.id} eachFaqData={eachFaq} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
