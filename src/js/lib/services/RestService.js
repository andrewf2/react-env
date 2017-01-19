import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


const RestService = (resource) => {
	return {
		all:all,
		find:find,
		create:create,
		update:update,
		destroy:destroy
	};

	function all(){
		return axios.get(baseUrl + "/"+ resource).then(success,error);	
	};

	function find(id){
		return axios.get(baseUrl+ "/" + resource + "/" + id);
	};

	function create(data){
		return axios.post(baseUrl + "/"+ resource, data);
	};

	function update(id,data){
		return axios.put(baseUrl+ "/" + resource + "/" + id,data);
	};

	function destroy(id){
		return axios.delete(baseUrl+ "/" + resource + "/" + id);
	};

	function success(res){
		return res;
	};

	function error(e){
		return e;
	};

};

export default RestService;