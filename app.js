const express=require('express');
const path=require('path');

//!Express instance
const app=express();
const port=3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

//!Home route
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
})
//!About route
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','about.html'));
   
})
//!Contact route
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','contact.html'));
})
//!Start the  server
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});