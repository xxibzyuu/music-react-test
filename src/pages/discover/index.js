import { memo } from "react";
import { renderRoutes } from "react-router-config";

export default memo(function JMDiscover(props) {
  const { route } = props
  console.log(props)
  return (
    <div>
      {renderRoutes(route.routes)}
    </div>
  )
})