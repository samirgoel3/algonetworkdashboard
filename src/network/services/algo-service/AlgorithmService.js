import apiClient from '../../api-client/ApiClient';
import Endpoints from '../../endpoints';

class AlgoService {
    getAlgoCategories = () => apiClient().get("" + Endpoints.v1.GET_ALGO_CATEGORIES);
    getCreateAlgoCategories = (name, color, icon) => apiClient().post("" + Endpoints.v1.CREATE_ALGO_CATEGORY, {name, color, icon});
    getCreateAlgorithm = (data) => apiClient().post(""+Endpoints.v1.CREATE_ALGORITHM, {category_id:data.category_id, problem:data.problem, solution:data.solution, level:data.level})
}
export default new AlgoService();
