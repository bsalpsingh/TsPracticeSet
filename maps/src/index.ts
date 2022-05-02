import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./customMap";
// const user = new User();
// const company = new Company();

// however type script has no idea of global imports scripts
// there fore type definatitons must be insalled
const user = new User();
const company=new Company()
const customMap = new CustomMap("map");
customMap.addMarker(user);
customMap.addMarker(company);
