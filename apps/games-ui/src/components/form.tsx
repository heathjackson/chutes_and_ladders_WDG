import { Formik, Field, Form, FormikHelpers, useFormik} from 'formik';
import * as yup from "yup";
import { IPlayGame } from '@hjackson/model';
import { useState, useMemo } from 'react';
import { useSubmit } from 'react-router-dom';

type UserInfo = {
  uuid?: string;
  name: string;
  email: string;
}

const validationSchema = yup.object({
  name: yup.string(),
  email: yup.string().required("Email is required")
})

export const Register = () => {
  const [gameUUID, setGameUUID] = useState<IPlayGame>()
  const submit = useSubmit()

  useMemo(() => {
    const stored = sessionStorage.getItem("current_game");
    if(stored) {
      setGameUUID(JSON.parse(stored))
    }
  }, [setGameUUID])

  const formik = useFormik<UserInfo>({
    initialValues: {
      uuid: gameUUID?.uuid,
      name: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async(values) => {
      submit(values, {method: "post"})
    }
  })

  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          uuid: '',
          name: '',
          email: '',
        }}
        onSubmit={(
          values: UserInfo,
          { setSubmitting }: FormikHelpers<UserInfo>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <label htmlFor="uuid">First Name</label>
          <Field id="uuid" name="uuid" placeholder="John" />

          <label htmlFor="name">Last Name</label>
          <Field id="name" name="name" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
