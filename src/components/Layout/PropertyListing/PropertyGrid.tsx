// external imports
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { Button, Card, CardContent, CardMedia, Grid } from "@mui/material"
import { useRouter } from "next/router"
import { useEffect } from "react"
// import data from file
import homes from "../../../../data/homes.json"
// import css
import styles from "./styles.module.css"

const PropertyGrid = () => {
  const data = homes
  const router = useRouter()
  /*
    The purpose of the useEffect is see if the user is not authenticated then redirect it to sign in page
  */
  useEffect(() => {
    if (!localStorage.getItem("uid")) {
      router.push("/")
    }
  })

  /**
    Function name: handleClick
    Arguments: full address of property 
    Return : void 
    Purpose : To show alert with having full address of the property being clicked on
  **/
  const handleClick = (address: string): void => {
    alert(`Redirect to detail page of property ${address}`)
  }
  return (
    <div>
      <Grid
        container
        direction={"row"}
        justifyContent="space-between"
        alignItems="center"
        textAlign={"center"}
        spacing={12}
        className={styles.property_container}
      >
        {data && data?.length > 0 ? (
          data?.map((item) => (
            <>
              <Grid item xs={12} sm={12} md={3} lg={3} key={item.id}>
                <Card key={item?.id}>
                  <CardMedia
                    sx={{ height: 425 }}
                    image={"/Images/Placeholders/property.jpeg"}
                    title=""
                  />
                  <CardContent className={styles.property_content}>
                    <Grid className={styles.property_address}>
                      <span>{item?.address}</span>
                      <Button
                        color="success"
                        size="small"
                        className={styles.primary_btn}
                        onClick={() => handleClick(item?.fullAddress)}
                      >
                        <ArrowForwardIosIcon className={styles.arrow_icon} />
                      </Button>
                    </Grid>
                    <Grid>
                      <p>
                        <span>{item?.city},</span> &nbsp;
                        <span>{item?.state}</span> &nbsp;
                        <span>{item?.zipCode}</span>
                      </p>
                    </Grid>
                    <Grid className={styles.property_stats}>
                      <p>
                        <span>Beds: {item?.bedrooms}</span> &nbsp;
                        <span>Bathrooms:{item?.bathrooms}</span> &nbsp;
                        <span>SqrFt: {item?.sqft}</span>
                      </p>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </>
          ))
        ) : (
          // in case if there is no property
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <h1>No Property Available</h1>
          </Grid>
        )}
      </Grid>
    </div>
  )
}

export default PropertyGrid
