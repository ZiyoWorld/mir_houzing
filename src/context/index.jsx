import  React  from "react";

import PropertiesProvider from "./properteis";


const RootContext = ({ children }) => {
    return <PropertiesProvider>
            {children}
       </PropertiesProvider>
        
}
export default RootContext;