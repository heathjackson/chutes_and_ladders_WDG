import { Container } from "@mui/material";
import { useFormik } from "formik";
import { useSubmit } from "react-router-dom";
import * as Yup from "yup";

const schema = Yup.object({
  userName: Yup.string().required("Please enter a valid name"),
  uuid: Yup.string().uuid(),
  avatar: Yup.string()
})

export const Register = () =>  {
  const submit = useSubmit()
  const data = JSON.parse(sessionStorage.current_game)
  
  const {values, errors, handleBlur, handleChange, handleSubmit, touched} = useFormik({
    initialValues: {
      userName: "",
      uuid: data,
      avatar: "",
    },
    validationSchema: schema,
    onSubmit: async(values) => {
      submit(values, {method: "post"})
    },
  });

  return(
    <Container>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">User Name</label>
        <input 
          value={values.userName}
          onChange={handleChange} 
          id="userName"
          type="text" 
          placeholder="Enter your name"
          onBlur={handleBlur}
          className={errors.userName && touched.userName ? "input-error" : ""}/>
        {errors.userName && touched.userName && <p className= "error">{errors.userName}</p>}

        <label htmlFor="avatar">avatar</label>
        <input 
          value={values.avatar}
          onChange={handleChange} 
          id="avatar"
          type="text" 
          placeholder="Enter color"
          onBlur={handleBlur}
          className={errors.avatar && touched.avatar ? "input-error" : ""}/>
        {errors.avatar && touched.avatar && <p className= "error">{errors.avatar}</p>}
      
        <input 
          value={values.uuid}
          onChange={handleChange} 
          id="uuid"
          type="hidden"
        />
          <button type="submit">Submit</button>
      </form>
    </Container>
  )
}