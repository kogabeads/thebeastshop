import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    sublists:[
    	{'src':'http://img.thebeastshop.com/beast_website/1af9323a75ad41fc92efabaf83cd884f.jpeg@2e_0o_0l_486h_750w_90q.src','txt':'2017.11.11 | Dream Space 我在梦里','price':'￥150起','more':'了解更多'},
    	{'src':'http://img.thebeastshop.com/beast_website/8bfd6d60bcf2450ba16632426de7f86e.jpeg@2e_0o_0l_486h_750w_90q.src','txt':'海淘专场满减','price':'￥199起','more':'进入专题'},
    	{'src':'http://img.thebeastshop.com/beast_website/0de80330136845fca1ae080961993944.jpeg@2e_0o_0l_486h_750w_90q.src','txt':'井柏然同款','price':'￥75起','more':'了解更多'},
    	{'src':'http://img.thebeastshop.com/beast_website/3d344b8f610f49b3b6919976bb99af37.jpeg@2e_0o_0l_486h_750w_90q.src','txt':'风靡日本的平价神奇塑身裤','price':'￥199起','more':'进入专题'},
    	{'src':'http://img.thebeastshop.com/beast_website/f2cbb452b1704deaba4999e4a4d96007.jpeg@2e_0o_0l_486h_750w_90q.src','txt':'Angelina | Coco Chanel的灵感源泉','price':'￥78起','more':'了解更多'},
    	{'src':'http://img.thebeastshop.com/beast_website/f8999e6cf7574e3ebab4c6863a09f24e.jpeg@2e_0o_0l_486h_750w_90q.src','txt':'野兽派与小王子，守护与仰望。','price':'￥98起','more':'了解更多'},
    ],
    bottomlist:[
        {'txt':'会员政策','path':'/vip'},
        {'txt':'售后服务','path':'/service'},
        {'txt':'配送方式','path':'/distribution'},
        {'txt':'客服联系方式','path':'/contact '},
        {'txt':'加入我们','path':'/join'},
        {'txt':'常见问题','path':'/problem'},
        {'txt':'跨境购说明','path':'/foreign'}
    ]
  }
})

export default store