

<script>
export default {
    props:{
        tag:{
            type:String,
            default:'div'
        },
        jiang:{
            type:Number
        }
    },
    render(h) {
    // let obj=  h('div',{}, 'render 函数')
    //     // return 'render 函数'
    //     console.log(obj);
    //      return obj
    
    return h(
        this.tag,{class:['el-row']},this.$slots.default
    ) }
   ,
    
}
</script>

<style scoped>
.el-row{
    width: 100%;
    display: flex;
}
</style>
