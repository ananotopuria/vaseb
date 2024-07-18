/* eslint-disable prettier/prettier */
import ConcatcForm from '../components/ContactForm/ConcatcForm';
import styles from '../components/ContactForm/ContactForm.module.css';
import ConnectContent from '../components/ConnectContent/ConnectContent';
import ConnectVaseb from '../components/ConnectVaseb/ConnectVaseb';

export default function ContactPage() {
  return (
    <div className={styles.contactFormContainer}>
      <h1 className={styles.contactFormTitle}>Contact us</h1>
      <div className={styles.contactFormContent}>
        <ConcatcForm />
        <ConnectContent />
      </div>
      <ConnectVaseb />
    </div>
  );
}
