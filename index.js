const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/fyndacademy')
.then(()=>{console.log('Connection has been established');})
.catch((err)=>console.log(err))

//schema/structure
const courseSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    courseType:String,
    noVideo:Number,
    author:String,
    active:Boolean

})


//create collections
const courseRecord=new mongoose.model('courseRecord',courseSchema)

//insert data
// const vueData=new courseRecord({
//     title:'Vue',
//     courseType:"Front End",
//     noVideo:25,
//     author:"Richa",
//     active:true

// })
// vueData.save()

//save data using async await
// const createDocument=async()=>{
//     try{
//         const reactData=new courseRecord({
//                 title:'React',
//                 courseType:"Front End",
//                 noVideo:36,
//                 author:"Peter",
//                 active:true
            
//             })
//             const result=await reactData.save()
//             console.log(result);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// createDocument();

//insert many
// const createDocument=async()=>{
 
//     try{
//                 const htmlData=new courseRecord({
//                         title:'HTML',
//                         courseType:"Front End",
//                         noVideo:16,
//                         author:"John Wick",
//                         active:true
                    
//                     })
//                     const cssData=new courseRecord({
//                         title:'CSS',
//                         courseType:"Front End",
//                         noVideo:46,
//                         author:"John Wick",
//                         active:true
                    
//                     })
//                     const jsData=new courseRecord({
//                         title:'JS',
//                         courseType:"Front End",
//                         noVideo:16,
//                         author:"peter",
//                         active:true
                    
//                     })
//                     const mongodbData=new courseRecord({
//                         title:'Mongodb',
//                         courseType:"Database",
//                         noVideo:34,
//                         author:"Richa Arora",
//                         active:true
                    
//                     })
//                     const nodeData=new courseRecord({
//                         title:'Node',
//                         courseType:"Back End",
//                         noVideo:16,
//                         author:"Richa",
//                         active:true
                    
//                     })
//                     const expressData=new courseRecord({
//                         title:'Express',
//                         courseType:"Back End",
//                         noVideo:16,
//                         author:"John Wick",
//                         active:true
                    
//                     })
//                     const result=await courseRecord.insertMany([htmlData,cssData,jsData,mongodbData,nodeData,expressData])
//                     console.log(result);
//                 }
//             catch(err){
//                 console.log(err);
//             }
// }

// createDocument()

//read data
// const getDocument=async()=>{
//     // const resultdata=await courseRecord.find()
//     //use projection second parameter
//     // const resultdata=await courseRecord.find({courseType:'Front End'})
//     // const resultdata=await courseRecord.find({courseType:'Front End'}).select({title:0})
//     const resultdata=await courseRecord.find({courseType:'Front End'}).select({title:1,_id:0}).limit(1)

//     console.log(resultdata);
// }
// getDocument()


// ---------comparison query operators--------
// const getDocument=async()=>{
//     try{
// const result2=await courseRecord.find({noVideo:16})
// const result2=await courseRecord.find({noVideo:{$gte:16}})
//$in combination of data
// const result2=await courseRecord.find({courseType:{$in:['Back End','Database']}}).select({title:1}).skip(1)
// const result2=await courseRecord.find({courseType:{$nin:['Back End','Database']}}).select({title:1}).skip(1)

// console.log(result2);
//     }
//     catch(e){
//         console.log(e);
//     }
// }
// getDocument()


//----------count and sorting------
// const getDocument=async()=>{
//         try{
    // const result2=await courseRecord.find({noVideo:16})
    // const result2=await courseRecord.find({noVideo:{$gte:16}})
    // $in combination of data
    // const result2=await courseRecord.find({courseType:{$in:['Back End','Database']}}).select({title:1}).skip(1)
    // const result2=await courseRecord.find({$and:[{courseType:'Front End'},{author:'John Wick'}]}).select({title:1})
    // const result2=await courseRecord.find({$and:[{courseType:'Front End'},{author:'John Wick'}]}).countDocuments()
    // const result2=await courseRecord.find({$and:[{courseType:'Front End'},{author:'John Wick'}]}).sort({title:0})
    // const result2=await courseRecord.find().sort({title:-1})

    // console.log(result2);
    //     }
    //     catch(e){
    //         console.log(e);
    //     }
    // }
    // getDocument()


    //------update
//     const updateDocument=async()=>{
//         try{
// const result3=await courseRecord.updateOne({title:'HTML'},{$set:{author:'Yash'}})
// const result2=await courseRecord.find({title:'HTML'})
// console.log(result2);
//         }
//         catch(e){
// console.log(e);
//         }
//     }

//     updateDocument()


const updateDocument=async(_id)=>{
    try{
// const result3=await courseRecord.updateOne({_id},{
    const result3=await courseRecord.findByIdAndUpdateOne({_id},{

    $set:{
title:'React JS'
    }
})
const result2=await courseRecord.find({author:'Peter'})

console.log(result2);
    }
    catch(e){
console.log(e);
    }
}

updateDocument("6405d8b53ff686143985b992")