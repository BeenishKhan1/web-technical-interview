// import external file
import { Button, Grid } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import { FormEvent, useState } from "react"
import Input from "../Input"

// import internal files
import Users from "../../../../data/users.json"

//import css
import styles from "./styles.module.css"

const SignIn = () => {
  const userData = Users
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errMsg, setErrMsg] = useState("")
  /**
    Function name: handleEmail
    Arguments: HTML input element
    Return : void 
    Purpose : Set the value of email entered by user in email state
  **/
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    setErrMsg("")
  }

  /**
    Function name: handlePassword
    Arguments: HTML input element
    Return : void 
    Purpose : Set the value of password entered by user in password state
  **/
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    setErrMsg("")
  }

  /**
    Function name: handleSubmit
    Arguments: None
    Return : void 
    Purpose : Authenticate user. In case the user is successfully authenticated redirect it to property page or else show error message
  **/
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // to prevent page from refreshing
    e.preventDefault()
    setErrMsg("")
    const user = userData.find(
      (user) => user.email === email && user.password === password
    )
    // if the user is found then store data in local storage and redirect it to property listing page
    if (user) {
      localStorage.setItem("firstName", user?.firstname)
      localStorage.setItem("lastName", user?.lastname)
      localStorage.setItem("uid", user?.id.toString())
      router.push("/Property/Listing")
    } else {
      setErrMsg("User does not exists")
    }
  }
  return (
    <Grid item lg={12} md={12} sm={12} xs={12}>
      <form onSubmit={handleSubmit}>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={styles.input_container}
        >
          <Input
            placeholder="Enter email"
            type="email"
            value={email}
            required={true}
            onChange={handleEmail}
          />
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={styles.input_container}
        >
          <Input
            placeholder="Enter password"
            type={"password"}
            value={password}
            required={true}
            onChange={handlePassword}
          />
        </Grid>
        <p className={styles.error_message}>{errMsg}</p>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Button type="submit" className={styles.login_btn}>
            Login
          </Button>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Link href={"/forgetPassword"}>
            <a className={styles.forgetPassword}>Forgot password?</a>
          </Link>
        </Grid>
      </form>
    </Grid>
  )
}

export default SignIn
