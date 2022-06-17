import * as React from "react";
import * as ReactDOM from "react-dom";
import ReactInputVerificationCode from "react-input-verification-code";


export default function Code(){
 
  return (
      <>
     <div className="custom-styles" sx={{width:'100px'}}>
        <ReactInputVerificationCode placeholder={null}
          length={6} onChange={console.log} />
     </div>
      </>
  )
}

