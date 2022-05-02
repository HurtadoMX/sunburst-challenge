import React from "react";
import Treemap from "sunburst-chart";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Sunburst = () => {
  const Info = useSelector((state) => state.vehiculos);

  const sunburst = ()=>{
      Treemap().data(Info).size("size").color("color").width(500).height(500)(
          document.getElementById("chart")
        );

  }



  useEffect(() => {
    sunburst()
   
    
  }, [Object.keys(Info).length]);

     

    

  return (
    <div>

    {
        Info && Object.keys(Info).length == 0 ? null
        :(<div className="contai">
      <div id="chart" className="linechart"></div>
    </div>)
  }
  
  </div>  
  ) 
  
};

export default Sunburst;
