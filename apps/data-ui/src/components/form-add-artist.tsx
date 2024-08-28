import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSubmit } from "react-router-dom";
import * as Yup from "yup";


const schema = Yup.object({
  artistName: Yup.string().required("Please enter a valid name"),
});

export const AddArtist = () => {
    const submit = useSubmit();

  return (
   <Formik
    initialValues = {{
      artistName: '',
    }}
    validationSchema={schema}
    onSubmit={async (values) => {
      submit(values, { method: "post", action: `/addArtist` });
    }}
    >
      <Form>
        <label htmlFor="artistName">Artist Name</label>
        <Field name="artistName" type="text" className="form-input" placeholder="artist name"/>
        <ErrorMessage name="artistName"/>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};