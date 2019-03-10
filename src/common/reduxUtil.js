import {createAction} from 'redux-act';
import axios from 'axios';
// interface IRequestOption{
    // method: string,
    // server: string,
    // path: string,
    // params: object,
    // actionName: string,
    // actions: object    
// }
const ReduxUtil = {
    // makeAction: (type, ...argNames) => {
    //     return (...args) => {
    //         const action = {type};
    //         argNames.forEach((arg, index) => {
    //           action[argNames[index]] = args[index];
    //         })
    //         return action;
    //     }   
    // },
    generateActions: (actionNameArr) => {
        let actionArr = {};
        actionNameArr.forEach((actName) => {
            actionArr[actName] = createAction(actName);
        });
        return actionArr;
    },
    sendRequest: (options, fn) => {
        const {method, actionName, params, path, server} = options; 
        return (dispatch) => {
          return axios({
              method: method,
              url: server + path,
              data: {...params},
              withCredentials: true,
          })
          .then((response) => {
            if(actionName){ dispatch(options.actions[actionName](response.data)); }
            
            if(fn){
              fn(response);
            }
          })
          .catch((error) => {
            console.log('something went wrong', error);
          })
        }
    },
};
export default ReduxUtil;