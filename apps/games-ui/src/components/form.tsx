import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSubmit, useParams } from "react-router-dom";
import * as Yup from "yup";

const schema = Yup.object({
  userName: Yup.string().required("Please enter a valid name"),
  color: Yup.string().required("Required"),
});

export const Register = () => {
  const id = useParams().id;
  const submit = useSubmit();

  // const colorOptions = [
  //   { value: "red", label: "Red" },
  //   { value: "green", label: "Green" },
  //   { value: "blue", label: "Blue" },
  //   // Add more color options as needed
  // ];

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
          <option value="null">Please Choose a Color</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </Field>
        <ErrorMessage name="color"/>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};