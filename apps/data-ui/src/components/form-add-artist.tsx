import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import { useSubmit } from "react-router-dom";
import * as Yup from "yup";

const schema = Yup.object({
  artistName: Yup.string().required("Please enter a valid name"),
});

export const AddArtist = () => {
    const [artistName, setArtistName] = useState('')
    const submit = useSubmit();
 
  return (
   <Formik
    initialValues = {{
      artistName: artistName,
    }}
    validationSchema={schema}
    onSubmit={async (values) => {
        setArtistName(values.artistName)
        submit(values.artistName);
    }}
    >
      <Form>
        <label htmlFor="artistName">Artist Name</label>
        <Field name="userName" type="text" className="form-input" placeholder="Put in the artist name"/>
        <ErrorMessage name="userName"/>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};