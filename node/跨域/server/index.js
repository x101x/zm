const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaStatic = require('koa-static')
const path = require('path')
const app = new Koa()
app.use(KoaStatic(path.join(__dirname,'./static')));
var router = new KoaRouter();
 app.use(async(ctx,next)=>{
   ctx.set('Access-Control-Allow-Oringin','*')
  ctx.set('Access-Control-Allow-Methods','POST,GET,PUT,DELETE,OPTIONS')
  ctx.set('Access-Control-Allow-Headers','X-custume,Content-Type')
  ctx.set('Access-Control-Allow-Credentials',true)
  await next()
 })
router.post('/api/books', (ctx, next) => {
  // ctx.router available
  
  console.log(ctx.cookies.get('hello'));
  
  ctx.body = [
    {bookName:'php'},
    {bookName:'node'}
  ] 
});
 
app.use(router.routes())
  .use(router.allowedMethods());

app.listen(3000,()=>{
  console.log('server is running 3000');
  
})