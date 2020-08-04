import {Schemas,Movies, Admin,Moviess} from './schemas'
const Realm=require('realm');
import {observable} from 'mobx'
export const addUser=async(userData)=>{
    Realm.open({schema:[Schemas]})
    .then(realm=>{
        realm.write(()=>{
            realm.create(
                'signupUser',{
                    username:userData.username,
                    email_id:userData.email_id,
                    password:userData.password
                }
            )
        }
        )
    }).catch(error=>{console.log(error)})
  console.log('done')
  
}
export const addAdmin=async()=>{
    Realm.open({schema:[Admin]})
    .then(realm=>{
        realm.write(()=>{
            realm.create(
                'admin',{
                    username:'Prakash',
                    password:'chanchal'
                }
            )
        }
        )
    }).catch(error=>{console.log(error)})
  console.log('done')
  
}
export const addMovie=async(movieData)=>{
    Realm.open({schema:[Moviess]})
    .then(realm=>{
        realm.write(()=>{
            realm.create(
                'moviess',{
                    name:movieData.name,
                    genre:movieData.genre,
                    description:movieData.description,
                    url:movieData.url
                }
            )
        }
        )
    }).catch(error=>{console.log(error)})
  console.log('done')
 
}
export const getUser=async()=>{
    const realm=await Realm.open({schema:[Schemas]})
    let allUser=realm.objects('signupUser');
    console.log(allUser)
    for(let User of allUser)
    {
    return( console.log(`${User.username}`),
        console.log(`${User.email_id}`),
        console.log(`${User.password}`))
     }
    }
 export const getMovies=async()=>{
    const realm=await Realm.open({schema:[Movies]})
    let allMovies=realm.objects('movies');
    let json=JSON.stringify(allMovies)
    console.log(allMovies)
 }
   

    
   
        
