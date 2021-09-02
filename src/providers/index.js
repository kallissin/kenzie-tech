import { UserProvider } from "./users";
import { TechsProvider } from "./techs";
const Providers = ({ children }) => {
  return (
    <UserProvider>
      <TechsProvider>{children}</TechsProvider>
    </UserProvider>
  );
};

export default Providers;
