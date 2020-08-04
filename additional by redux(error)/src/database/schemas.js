export const Schemas={
    name:'signupUser',
    primaryKey:'email_id',
    properties:{
        username:'string',
        email_id:'string',
        password:'string'
    }
}
export const Movies={
    name:'movies',
    primaryKey:'name',
    properties:{
        name:'string',
        genre:'string',
        url:'string'
    }
}
export const Admin={
    name:'admin',
    primaryKey:'username',
    properties:{
        username:'string',
        password:'string'
    }
}