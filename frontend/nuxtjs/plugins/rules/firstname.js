export const firstnameRules = [
  { required: true, message: 'Ingrese un nombre.', trigger: 'change' }
]

export default {
  name: 'firstname',
  placeholder: 'Ingresa tu nombre',
  initialValue: '',
  rules: firstnameRules
}
