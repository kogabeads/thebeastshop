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
    ],
    cardKind:[
        {'name':'花艺','add':1,'more':['鲜花','永生花','花器','限量礼盒','查看全部']},
        {'name':'家纺','add':1,'more':['床品','盖毯','靠垫','毛巾','芯类','家居服','查看全部']},
        {'name':'家饰','add':1,'more':['灯具','地毯','镜子','装饰画','五金','摆件','花器','收纳','小家具','查看全部']},
        {'name':'餐厨','add':1,'more':['碗盘碟锅','玻璃器皿','马克杯','咖啡与茶','刀叉勺筷','厨房工具','厨房布艺','食品','查看全部']},
        {'name':'美护个护','add':1,'more':['个人护理','美妆','查看全部']},
        {'name':'香氛','add':1,'more':['香氛蜡烛','散香器','香水','香包香片','香氛喷雾','织物香氛','车载香氛','香氛礼盒','香氛配件','查看全部']},
        {'name':'珠宝配饰','add':1,'more':['高级珠宝','时尚珠宝','围巾','其他配饰','查看全部']},
        {'name':'家居服','add':1,'more':['睡衣','内衣','袜类','查看全部']},
        {'name':'海外直邮','add':0},
        {'name':'礼物','add':1,'more':['under ¥300','For Her','For Him','For Baby','野兽经典','艺术家作品','限量礼盒','查看全部']},
        {'name':'实体店','add':0}
    ],
    goods:[
        {'src':"http://img.thebeastshop.com/image/20170615175307465568.jpg@2e_0o_0l_345h_330w_90q.src",'name':"意大利高端奢华内衣",'logo':'COSABELLA','txt':'ROSALIND系列 蕾丝吊带背心','price':'¥750.00'},
        {'src':"http://img.thebeastshop.com/image/20170414143053275137.jpg@2e_0o_0l_345h_330w_90q.src",'name':"意大利精湛工艺的体现",'logo':'COSABELLA','txt':'MINOA粉色深V荷叶边蕾丝吊带睡裙','price':'¥935.00'},
        {'src':"http://img.thebeastshop.com/image/20170504184039615618.jpg@2e_0o_0l_345h_330w_90q.src",'name':"完美冻龄体验",'logo':'MY BEAUTY BOX x THE BEAST','txt':'欧莱雅集团冻龄小美盒 粉色化妆包','price':'¥390.00'},
        {'src':"http://img.thebeastshop.com/image/20170517171011657747.jpg@2e_0o_0l_345h_330w_90q.src",'name':"轻松打造光滑肌肤",'logo':"Silk'n",'txt':'家用激光全身脱毛器','price':'¥2999.00'},
        {'src':"http://img.thebeastshop.com/image/20170615175307465568.jpg@2e_0o_0l_345h_330w_90q.src",'name':"意大利高端奢华内衣",'logo':'COSABELLA','txt':'ROSALIND系列 蕾丝吊带背心','price':'¥750.00'},
        {'src':"http://img.thebeastshop.com/image/20170615175307465568.jpg@2e_0o_0l_345h_330w_90q.src",'name':"意大利高端奢华内衣",'logo':'COSABELLA','txt':'ROSALIND系列 蕾丝吊带背心','price':'¥750.00'},
        {'src':"http://img.thebeastshop.com/image/20170615175307465568.jpg@2e_0o_0l_345h_330w_90q.src",'name':"意大利高端奢华内衣",'logo':'COSABELLA','txt':'ROSALIND系列 蕾丝吊带背心','price':'¥750.00'},
        {'src':"http://img.thebeastshop.com/image/20170615175307465568.jpg@2e_0o_0l_345h_330w_90q.src",'name':"意大利高端奢华内衣",'logo':'COSABELLA','txt':'ROSALIND系列 蕾丝吊带背心','price':'¥750.00'},
        {'src':"http://img.thebeastshop.com/image/20170615175307465568.jpg@2e_0o_0l_345h_330w_90q.src",'name':"意大利高端奢华内衣",'logo':'COSABELLA','txt':'ROSALIND系列 蕾丝吊带背心','price':'¥750.00'},
    ]
  }
})

export default store