import React from "react";
import {  Grid } from "react-loader-spinner";

function Loader() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          height="80"
          width="80"
          color="#80bfff"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
}

export default Loader;
