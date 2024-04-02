import { Container } from "@mui/material";
import { useFormik } from "formik";
import { useSubmit } from "react-router-dom";
import * as Yup from "yup";

const schema = Yup.object({
  userName: Yup.string().required("Please enter a valid name"),
  uuid: Yup
  .string()
  .min(4)
  .required("required"),
  gameId: Yup.string(),
})

export const Register = () =>  {
  const submit = useSubmit()
  const {values, errors, handleBlur, handleChange, handleSubmit, touched} = useFormik({
    initialValues: {
      userName: "",
      uuid: "",
      gameId: "",
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
        <label htmlFor="uuid">UUID Info</label>
        <input 
          value={values.uuid}
          onChange={handleChange} 
          id="uuid"
          type="text" 
          placeholder="Enter UUID"
          onBlur={handleBlur}
          className={errors.uuid && touched.uuid ? "input-error" : ""}/>
          {errors.uuid && touched.uuid && <p className= "error">{errors.uuid}</p>}

        <label htmlFor="gameId">Game ID</label>
        <input 
          value={values.gameId}
          onChange={handleChange} 
          id="gameId"
          type="text" 
          placeholder="Enter your gameId"
          onBlur={handleBlur}
          className={errors.gameId && touched.gameId ? "input-error" : ""}/>
          {errors.gameId && touched.gameId && <p className= "error">{errors.gameId}</p>}
          <button type="submit">Submit</button>
      </form>
    </Container>
  )
}