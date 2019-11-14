##  
<template>
<div>
<slot></slot>
<el-button></el-button>
</div>
</template>

里面的东西 都会被 编译为 
h('div,{},[children])

h函数的返回
一个对象
{
    详细的描述了，该标签上的信息：props，id ，class ，子节点 
}
虚拟节点（virtual node）Vnode                        
虚拟DOM ：Vnode 建立起来的一个树    