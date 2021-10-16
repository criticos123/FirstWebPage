import { useEffect } from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

function Meldev({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Wrapper>
      <Navbar />
      <Component {...pageProps} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  linear-gradient(lightblue, transparent),
  linear-gradient(to top , #6495ED, transparent);
  background-blend-mode: screen;
  margin:auto;
  flex-wrap: wrap;
`;

export default Meldev;
