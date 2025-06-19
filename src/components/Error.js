import {useRouteError} from "react-router-dom";
function Error() {
    const err=useRouteError();
    console.log("Error Shown From Error Component")
  return (
    <div>
        <h1>Ops Error Occured</h1>
        <h2>{err.data}</h2>
    </div>
  )
}

export default Error