import AV,{Query,User} from 'leancloud-storage';
import resolve from 'resolve';



AV.init({
    appId: "6wFgmvwt68oalbCtVNN1M2ky-gzGzoHsz",
    appKey: "AdHML4fTP8rw9J7swg8yK86r",
    serverURL: "https://6wfgmvwt.lc-cn-n1-shared.com"
  });




const Auth = {

  register(username,password){
    let user =new User();
    user.setUsername(username);
    user.setPassword(password);
    return new Promise( (resolve,reject) => { 
    user.signUp().then(loginedUser=>resolve(loginedUser),error=>reject(error))
    });

},

 login(username,password){
  return new Promise( (resolve,reject)=>{
      User.logIn(username,password).then(loginedUser =>resolve(loginedUser),error=>reject(error));
      });
 },


logout(){
  User.logOut();
},

getCurrentUser(){
return User.current();

}


}

export {Auth};