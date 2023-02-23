// external imports
import HomeIcon from "@mui/icons-material/Home"
import { Grid } from "@mui/material"
import type { NextPage } from "next"
// import from local files
import SignIn from "../components/Form/SignIn"
// import css
import styles from "../styles/Home.module.css"

const Login: NextPage = () => {
  return (
    <Grid container direction={"row"}>
      <Grid
        item
        lg={7}
        md={7}
        sm={12}
        xs={12}
        className={styles.sign_in_container}
      >
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <p className={styles.logo}>
            <HomeIcon fontSize="large" />
            Revive
          </p>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          mx={"auto"}
          className={styles.form_container}
        >
          <Grid container justifyContent={"center"}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <p className={styles.heading}>Sign in</p>
              <SignIn />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        lg={5}
        md={5}
        sm={0}
        xs={0}
        className={styles.banner_img}
      ></Grid>
    </Grid>
  )
}

export default Login
