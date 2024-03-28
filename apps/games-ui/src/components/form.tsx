import { useFormik } from 'formik';
import * as yup from "yup";
import { IPlayGame } from '@hjackson/model';
import { useState, useMemo } from 'react';
import { useSubmit } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

type UserInfo = {
  uuid?: string,
  name: string,
  email: string,
}

// const validationSchema = yup.object({
//   name: yup.string(),
//   email: yup.string().required("Email is required"),
//   intent: yup.string(),
// })

export const Register = () => {
  const [gameUUID, setGameUUID] = useState<IPlayGame>()
  const submit = useSubmit()

  useMemo(() => {
    const stored = sessionStorage.getItem("current_game");
    if(stored) {
      setGameUUID(JSON.parse(stored))
    }
    console.log(`stored = ${stored}`)
  }, [setGameUUID])

  const formik = useFormik<UserInfo>({
    initialValues: {
      uuid: gameUUID?.uuid,
      name: "",
      email: "",
    },

    // validationSchema: validationSchema,
    onSubmit: async(values) => {
      console.log(`values = ${values}`)
      submit(values, {method: "post"})
    }
  })

  return (
    <div>
      <h1>Signup</h1>
      <form method="POST" onSubmit={formik.handleSubmit}>
        <input type="hidden" name="uuid" value={gameUUID?.uuid}/>
        <TextField
          id="name"
          name="name"
          label="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          // error={formik.errors.name !== undefined}
          // helperText={formik.touched.name ? formik.errors.name : ""}
          >
        </TextField>
        <Button type="submit" name="form_info" value="mui_formik">submit</Button>
      </form>  
    </div>
  );
};