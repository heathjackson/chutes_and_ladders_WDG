import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSubmit, useParams } from "react-router-dom";
import { Color } from "@hjackson/chutes-and-ladders";
import * as Yup from "yup";

const color = Color
const colorOptions = [color[1], color[2], color[3], color[4]]

const schema = Yup.object({
  userName: Yup.string().required("Please enter a valid name"),
  color: Yup.string()
    .oneOf(colorOptions)
    .required("Required")
});

console.log(colorOptions)

colorOptions.forEach((key, index) => {
  console.log(`index = ${index}, key = ${key} = colorOption[index] = ${colorOptions[index]}` )
})

export const Register = () => {
  const id = useParams().id;
  const submit = useSubmit();
 
  return (
   <Formik
    initialValues = {{
      userName: "",
      color: ""
    }}
    validationSchema={schema}
    onSubmit={async (values) => {
      submit(values, { method: "post", action: `/games/${id}/playGame` });
    }}
    >
      <Form>
        <label htmlFor="userName">User Name</label>
        <Field name="userName" type="text" className="form-input" placeholder="Put in your name"/>
        <ErrorMessage name="userName"/>
  
        <label htmlFor="color">Color</label>
        <Field name="color" as="select" className="my-select">
          <option key="select" value="select a color">select a color</option>
          {colorOptions.map(color => {
             return <option key={color} value={color}>{color}</option>
            })
          }
        </Field>
        <ErrorMessage name="color"/>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};