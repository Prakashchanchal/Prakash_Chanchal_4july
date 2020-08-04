import {Schemas,Movies, Admin} from './schemas'
const Realm=require('realm');
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
  console.log(userData[1])
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
    Realm.open({schema:[Movies]})
    .then(realm=>{
        realm.write(()=>{
            realm.create(
                'movies',{
                    name:movieData.name,
                    genre:movieData.genre,
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
 export const deleteMovie=async(movieData)=>{
     Realm.open({schema:[Movies]})
     .then(realm=>{
         realm.write(()=>{
             let allMovies=realm.objects('movies');
            
             realm.delete(allMovies)
             console.log(allMovies)
         })
     })
 }   

    
   
        
