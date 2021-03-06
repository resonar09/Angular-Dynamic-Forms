
import { validateDuration } from "../validators/duration.validator";
import { validateUrl } from "../validators/url.validator";
import { validateStarts } from "../validators/starts.validator";
import { validateEnds } from "../validators/ends.validator";
 
export const CAB = {
  settings: {
    label: 'Settings',
    title: 'CAB',
    subtitle: 'Parent Form',
    debug: false,
    layout: 'inline'
  },
  controls: {
    name: {
      label: 'Name',
      placeholder: 'Please enter your name.',
      value: '',
      type: 'text',
      size: 'col-lg-4',
      validation: {
        required: true,
        customs: {
          validateStarts: {
            function: validateStarts,
            message: 'Name must start with B'
          },
          validateEnds: {
            function: validateEnds,
            message: 'Name must end with B'
          }
        }
      }
    },
    age: {
      label: 'Age',
      value: 5,
      type: 'text',
      readOnly: true,
      size: 'col-2',
      validation: {
        min: 3,
        max: 10,
        required: true,
        pattern: '[0-9]+'
      }
    },
    email: {
      label: 'Email',
      placeholder: 'test@test.com',
      value: '',
      type: 'email',
      validation: {
        required: true,
        email: true,
        pattern: '[a-zA-Z.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'
      }
    },
    gender: {
      label: 'Gender',
      value: 'M',
      readOnly: true,
      type: 'radio',
      options: [
        { label: "Male", value: 'M' },
        { label: "Female", value: 'F' }
      ]
    },
    city: {
      label: 'City',
      value: '',
      type: 'select',
      options: [
        { label: "(choose one)", value: '' },
        { label: "Bolzano", value: '39100' },
        { label: "Meltina", value: '39010' },
        { label: "Appiano", value: '39057' }
      ],
      validation: {
        required: true
      }
    }
  }
}