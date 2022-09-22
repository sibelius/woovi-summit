import type { NextPage } from "next";
import Box from "@mui/material/Box";
import wooviSummit from "../woovi-summit.png";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#00D69D",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <Image
          alt="Woovi Summit"
          src={wooviSummit}
          width={462}
          height={294}
        />
    </Box>
  );
};

export default Home;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
