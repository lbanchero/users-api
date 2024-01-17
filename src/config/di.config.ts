import registerRepositories from "../repositories/di.repositories";
import registerServices from "../services/di.services";

export default function configureDI() {
    registerRepositories();
    registerServices();
}