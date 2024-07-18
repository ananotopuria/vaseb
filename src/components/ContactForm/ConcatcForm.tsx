/* eslint-disable prettier/prettier */
import FormComponent from './FormComponent';
import { useForm } from 'react-hook-form';
import { FormValues } from './FormTypes';
import TextFieldComponent from './common/TextFieldComponent/TextFieldComponent';
import styles from './ContactForm.module.css';
import CheckboxComponent from './common/CheckboxFieldComponent/CheckboxFieldComponent';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormSchema } from './schema/FormSchema';

const ConcatcForm = () => {
  const methods = useForm<FormValues>({
    resolver: yupResolver(FormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: '',
      isAgree: false,
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: FormValues) => {
    console.log('onSubmit', data);
    methods.reset();
  };

  return (
    <div className={styles.contactForm}>
      <FormComponent methods={methods} submit={handleSubmit(onSubmit)}>
        <div className={styles.inputGroup}>
          <TextFieldComponent
            label="First name*"
            name="firstName"
            placeholder="Enter your first name"
          />
          <TextFieldComponent
            label="Last name"
            name="lastName"
            placeholder="Enter your last name"
          />
        </div>
        <div className={styles.inputGroup}>
          <TextFieldComponent
            label="Email Address*"
            name="email"
            placeholder="Enter your email"
          />
          <TextFieldComponent
            label="Phone number"
            name="phoneNumber"
            placeholder="Enter your phone number"
            isNumber
          />
        </div>
        <div>
          <TextFieldComponent
            label="Write your message here*"
            name="message"
            placeholder="Type Message"
            isTextarea
            rows={6}
          />
        </div>
        <div className={styles.buttonBox}>
          <CheckboxComponent
            label="I here by agree to the Terms & Conditions of Vaseb."
            name="isAgree"
          />
          <button type="submit">Submit now</button>
        </div>
      </FormComponent>
    </div>
  );
};

export default ConcatcForm;
