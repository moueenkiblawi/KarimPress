

 export const containerVariant={
      hidden: {opacity:0,
        transition: { duration: 2.5 }

    },
      show:{opacity:1,
        transition: { duration: 1.5 }
    
        }
      }

export const analyticVariant={
    hidden:{
       x:"100vw"
    },
    show:{
        Animation:{x:0} ,
     transition:{type:"spring",stiffness:120}
    }
}      


    

