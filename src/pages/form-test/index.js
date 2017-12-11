import React from 'react'
import Form, { Input, TextArea, Submit } from 'components/Form'
import ThankYou from 'components/ThankYou'

export default function FormTestPage() {
  return (
    <main className='row'>
      <div className='columns'>
        <h2>Form Test</h2>
        <Form
          submittedElement={ThankYou}
          id='zwtrd7608mqb1q'>
          <Input
            id='Field1'
            label='Name'
            autocomplete='name'
            required
          />
          <Input
            id='Field2'
            label='Phone'
            autocomplete='tel'
            validator='phone'
            required
          />
          <Input
            id='Field3'
            label='Email'
            autocomplete='email'
            placeholder='example@test.com'

          />
          <TextArea
            id='Field4'
            label='Message'
          />
          <Submit>Submit</Submit>
        </Form>
      </div>
    </main>
  )
}
