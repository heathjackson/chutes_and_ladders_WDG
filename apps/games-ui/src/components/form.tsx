import { useFormik } from 'formik';
import * as Yup from "yup";
import { IPlayGame } from '@hjackson/model';
import { useState, useMemo } from 'react';
import { useSubmit } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

type UserInfo = {
  uuid?: string,
  gameId?: string,
  userName: string,
}

const validationSchema = Yup.object({
  uuid: Yup.string(),
  gameId: Yup.string(),
  userName: Yup.string(),
});

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
      gameId: gameUUID?.id,
      userName: "",
    },


    validationSchema: validationSchema,

    onSubmit: async(values) => {
      console.log(values)
      submit(values, {method: "post"})
    }
  })

  return (
    <div>
      <h1>Signup</h1>
      <form method="POST" onSubmit={formik.handleSubmit}>
        <input type="hidden" id="uuid" name="uuid" value={formik.values.uuid} onChange={formik.handleChange}/>
        <TextField
          id="userName"
          name="userName"
          label="userName"
          value={formik.values.userName}
          onChange={formik.handleChange}
          // error={formik.errors.userName !== undefined}
          // helperText={formik.touched.userName ? formik.errors.userName : ""}
          >
        </TextField>
        <Button type="submit" name="form_info" value="mui_formik">submit</Button>
      </form>  
    </div>
  );
};