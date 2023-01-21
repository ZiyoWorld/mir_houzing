import { createContext,  useReducer } from "react";

const PropertiesContext = createContext();


const PropertiesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(() => []);
    return <PropertiesContext.Provider>{children}</PropertiesContext.Provider>
}
export default PropertiesProvider;