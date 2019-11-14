

<script>
export default {
    props:{
        tag:{
            type:String,
            default:'div'
        },
        span:{
            type:Number,
        
        },
        offset:{
            type:Number,
        
        }
    },
    render(h) {
    // let obj=  h('div',{}, 'render 函数')
    //     // return 'render 函数'
    //     console.log(obj);
    //      return obj
    let parent = this.$parent;
    let jiang = parent.jiang
    return h(
        this.tag,{class:['el-col',`el-clo-span-${this.span}`,` el-clo-span-${this.offset} `]},this.$slots.default
    ) }
   ,
    
}
</script>

<style scoped lang='scss'>
/* .el-row-span-4{
    width:4/24* 100%;
}
.el-row-span-20{
    width: 100%;
} */
@for $i from 0 through 24{
    .el-clo-span-#{$i}{
        // flex:0 0 (1/24*$i*100%)
        flex: 0 0 (1 / 24 * $i * 100) * 1%;
    }
}
@for $i from 0 through 24 {
  .el-col-offset-#{$i} {
    margin-left: (1 / 24 * $i * 100) * 1%;
  }
}
</style>
