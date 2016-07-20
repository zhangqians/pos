'use strict';
function test()
{
    var mytest=['ITEM000001',
        'ITEM000002-3',
        'ITEM000003-3',
        'ITEM000004-2',
        'ITEM000005',
        ];
    return mytest;

}
function newCartItems(test){
    var cartItem=[];
    for(var i=0;i<test.length;i++)
if(test[i].length==10)
{

    cartItem[i]={name:test[i],count:1};
}else
{
    var cartname=test[i].substring(0,10);
    var cartcount=parseInt(test[i].substring(11));
    cartItem[i]={name:cartname,count:cartcount};
}
    return (cartItem);
}
function allItems()
{
    var items=[];
    items[0]={name:'ITEM000001',price:3};
    items[1]={name:'ITEM000002',price:2};
    items[2]={name:'ITEM000003',price:4};
    items[3]={name:'ITEM000004',price:5};
    items[4]={name:'ITEM000005',price:3};
    return items;
}
function addCartItem(allItems,newCartItems)
{
   var myItems=[];
    var total=[];
     var prices=[];
    for(var i=0;i<newCartItems.length;i++) {

        for (var j = 0; j < allItems.length; j++) {

            if (newCartItems[i].name == allItems[j].name) {
                total[i] = newCartItems[i].count*allItems[j].price;
                prices[i]=allItems[j].price
            }

    }
        myItems[i] = {
            name: newCartItems[i].name,
            count: newCartItems[i].count,
            price: prices[i],
            subtotal: total[i]
        }

    }

   return (myItems);

}
function discountCart()
{
    var mydiscount=['ITEM000003','ITEM000004','ITEM000002'];
    return mydiscount;
}
function discountAdd(discountCart,addCartItem)
{
    var discountsub=[];
    var newsubtotals=[];

for(var i=0;i<addCartItem.length;i++) {

    for (var j=0; j<discountCart.length; j++)

    {
        if(addCartItem[i].name==discountCart[j] && addCartItem[i].count>=2 ) {
            newsubtotals[i] = addCartItem[i].price;
        }
    }
    discountsub[i]={
        name:addCartItem[i].name,
        count:addCartItem[i].count,
        price:addCartItem[i].price,
        subtotal:addCartItem[i].subtotal,
        newsubtotal:newsubtotals[i]
    }
        }
return (discountsub);
}
function addAll(discountAdd)
{
    var totals={};
    var sum=0;
   for(var i=0;i<discountAdd.length;i++) {
       sum = sum + discountAdd[i].subtotal;
       totals.total=sum;
   }
    return (totals)
}
function addAllDiscount(discountAdd)
{
    var distotals={};
    var sum=0;
    for(var i=0;i<discountAdd.length;i++) {
        if(discountAdd[i].newsubtotal!==undefined)
        sum = sum + discountAdd[i].newsubtotal;
        distotals.distotal=sum;
    }
    return (distotals)
}
function lastCartItems(discountAdd,addAll,addAllDiscount)
{

    console.log(discountAdd);
    console.log(addAll);
    console.log(addAllDiscount);

}
test=test();
newCartItems=newCartItems(test);
allItems=allItems();
addCartItem=addCartItem(allItems,newCartItems);
discountCart=discountCart();
discountAdd=discountAdd(discountCart,addCartItem);
addAll=addAll(discountAdd);
addAllDiscount=addAllDiscount(discountAdd);
lastCartItems(discountAdd,addAll,addAllDiscount);
//TODO: 请在该文件中实现练习要求并删除此注释
