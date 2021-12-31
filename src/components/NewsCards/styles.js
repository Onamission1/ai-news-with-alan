import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "65vh",
    padding: "10%",
    width: "100%",
    color: "white",
    borderRadius: 5,
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
});
