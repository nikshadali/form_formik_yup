import * as Yup from  'yup'

export const signupSchema = Yup.object({
    name:Yup.string().min(3).max(25).required('Please Enter valid username'),
    email:Yup.string().email().required('Please enter valid email'),
    password:  Yup.string()
    .required("Please enter password")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one symbol"
    ),
    confirm_password:Yup.string().required('Please enter confirm password').oneOf([Yup.ref('password')],'Password must be match')
})