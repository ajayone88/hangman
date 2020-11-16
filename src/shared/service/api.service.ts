import  axios from 'axios';
export class apiService{
    getQuestions(amount: number, id: number){
        return axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${id}`); 
    }
}