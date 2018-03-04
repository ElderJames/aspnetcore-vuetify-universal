export default {
  header: 'Form',
  headerText: 'When it comes to form validation, Vuetify has a multitude of integrations and baked in functionality. Want to use a 3rd party validation plugin? Out of the box you can use [Vee-validate](https://github.com/baianat/Vee-validate) and [vuelidate](https://github.com/monterail/vuelidate).',
  components: ['v-form'],
  examples: [{
    basicValidation: {
      header: 'VForm - Basic validation',
      desc: 'The internal `v-form` component makes it easy to add validation to form inputs. All input components have a `rules` prop which takes an array of functions. Whenever the value of an input is changed, each function in the array will receive the new value. If a function returns false or a string, validation has failed.'
    },
    validationWithSubmitAndClear: {
      header: 'Validation with submit & clear',
      desc: 'The `v-form` component has two functions that can be accessed by setting a ref on the component. `validate()` will validate all inputs and return if they are all valid or not. `reset()` will clear validation errors from all inputs.'
    },
    vuelidate: {
      header: 'Vuelidate',
      desc: ''
    },
    veeValidate: {
      header: 'Vee-validate',
      desc: 'Vee-validate is another validation plugin that allows you to check your forms. One caveat is that you must add the **type="checkbox"** to properly validate a `v-checkbox` when using the **value** prop.'
    }
  }],
  props: {
    lazyValidation: 'If enabled, **value** will always be _true_ unless there are visible validation errors. You can still call `validate()` to manually trigger validation'
  },
  functions: {
    reset: 'Resets validation for all inputs',
    validate: 'Validates all inputs and returns result'
  }
}
