const express =require('express');
const app=express();
const morgan=require('morgan');
const port =4000; 


//Server
app.listen(port,()=> {
    console.log(`server start ${port}`);
});
//MiddleWare
app.use(morgan(""));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get ('/api/student',(req,res)=>{
    const students =[
        {id:1,FirstName:"M",lastName: "Jinnah"  },
        {id:2,FirstName:"H",lastName: "Jinn"  }
    ]
res.json(students);
})