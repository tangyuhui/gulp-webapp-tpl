class Node{
   constructor(data,left,right){
        this.data = data;
        this.left = left;
        this.right = right;
   }
   show(){
   	return this.data
   }
}
class BST{
   constructor(){
        this.root =null;
   }
   insert(data){
      let n = new Node(data,null,null)
      if(!this.root){
         this.root=n
      }else{
      	let cur = this.root
        let parent = null
        while(true){
        	parent = cur
        	if(data<cur.data){
        		//存在左边
        	  cur= cur.left
        	  if(cur==null){
                parent.left=n
                break
        	  } 
        	}else{
        		//存在右边
        	  cur= cur.right
        	  if(cur==null){
        	  	parent.right=n
        	  	break
        	  }
        	}
        }
      }
   }
   inOrder(node){
   	if(node!=null){
   	   this.inOrder(node.left)
   	   console.log(node.data)
   	   this.inOrder(node.right)
   	}
   }
   preOrder(node){
   	 if(node!=null){
   	   console.log(node.data)
	   this.preOrder(node.left)
   	   this.preOrder(node.right)
   	 }
   }
   postOrder(node){
   	if(node!=null){
   		//左右根
   	  this.postOrder(node.left)
   	  this.postOrder(node.right)
      console.log(node.data)
   	}
   }
   getMin(){
     let current = this.root
     while(current.left){
      current = current.left
     }
   	 return current.data
   }
   getMax(){
     let current = this.root
     while(current.right){
      current = current.right
     }
   	 return current.data
   }
   find(data){
     let current=  this.root
     while(current){
     	if(data<current.data){
     		current = current.left
     	}else if(data>current.data){
     		current = current.right
     	}else{
     		return current
     	}
     }
     return null
   }
   remove(data){
      removeNode(this.root,data)
   }
   removeNode(node,data){
      if(node==null){
         return null
      }else{
      	if(node.data==data){
      		 if(node.left==null && node.right==null){
      		 	return node
      		 }else if(node.left ==null){
                return node.right
      		 }else if(node.right==null){
      		 	return node.left
      		 }else{
               //都不等于空的时候,得到右侧树的最小节点
               let smallNode = this.getSmallest(node.right)
               smallNode.left = node.left
               return node.right
      		 }
      	}else if(data<node.data){
      	 node.left = removeNode(node.left,data)
      	 return node
      	}else{
      	 node.right = removeNode(node.right,data)
      	 return node
      	}
      }
   }
   getSmallest(node){
    var current = node 
    while(current.left){
          current = current.left
     }
      return current
   }
}
var node = new Node(5,2,2)
var bst = new BST()
bst.insert(23)
bst.insert(45)
bst.insert(16)
bst.insert(37)
bst.insert(3)
bst.insert(99)
bst.insert(22)
console.log('--------中序遍历开始-----------------')
bst.inOrder(bst.root)
console.log('--------中序遍历结束----------------')
console.log('--------前序遍历开始-----------------')
bst.preOrder(bst.root)
console.log('--------前序遍历结束-----------------')
console.log('--------后序遍历开始-----------------')
bst.postOrder(bst.root)
console.log('--------后序遍历结束-----------------')
let min = bst.getMin()
let max = bst.getMax()
let keyNode = bst.find('16')
console.log('找值为16的节点',keyNode)
console.log('最小值',min)
console.log('最大值',max)
/*结构*/
console.log('根',bst.root)
//http://localhost:8999/app/views/