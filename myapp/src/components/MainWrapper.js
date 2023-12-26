import React from 'react'

const MainWrapper = () => {
  return (
    <div
        style={{
          border: "2px solid red",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ backgroundColor: "magenta", width: "15%" }}></div>
        <div
          style={{ backgroundColor: "brown", width: "85%", height: "7rem" }}
        ></div>
      </div>
  )
}

export default MainWrapper