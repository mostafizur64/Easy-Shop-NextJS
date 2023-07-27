import Spinner from "@/app/components/Spinner";
import React from "react"



const loading = () => {
  return (

      <div className="flex items-center justify-center min-h-[calc(100vh-400px)]">
        <Spinner />
      </div>
   
  );
};

export default loading;
