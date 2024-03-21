import express from "express"
import bodyParser from "body-parser"
import {dirname} from "path"
import {fileURLToPath} from "url"

const app= express();
const port = 3000;
app.use(express.static("public"))

app.listen(port,()=> {
  console.log(`Server is running on port ${port}`)
})

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended: true}))


app.get("/", (req, res)=>{
  res.render("index.ejs")
})
app.get("/about", (req, res)=>{
  res.render("about.ejs")
})
app.get("/contact", (req, res)=>{
  res.render("contact.ejs")
})
app.post("/contact/submit", (req,res)=>{
  console.log(req.body);
  let e = req.body.email;
  recEmail(e);
  console.log(emails);

  res.redirect("/")
})
var emails= [];
function recEmail(email){
  emails.push(email);
}

app.get("/blog", (req, res)=>{
  res.render("blog.ejs")
})
var blogs = []
var Objblog = {
  atk: blogs,
}
app.post("/blog/submit", (req,res)=>{
  // console.log(req.body);
  console.log(req.body.blogtitle)
  let a = req.body.blogtitle
  let b = req.body.blogpost
  var gblog = req.body;
  blogs.push(gblog);
  console.log(blogs);
  // console.log(blogtitle);
  res.redirect("/blog")
  // res.render("blogshow.ejs",{ands: a, blogpost: b})
})

app.get("/blogshow", (req, res)=>{
  Objblog.atk[0]
  var blog1title = blogs[0].blogtitle;
  console.log("this is what we get:"+blog1title);
  res.render("blogshow.ejs",{hi: blogs[0].blogtitle, post: blogs[0].blogpost, blogs:blogs})
})

// {
//   blogTitle: t,
//   blogPost: b
// }
// function recBlog(b){
//   blogs.push(b);
// }