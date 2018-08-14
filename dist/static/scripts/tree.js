var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function () {
   function Node(data, left, right) {
      _classCallCheck(this, Node);

      this.data = data;
      this.left = left;
      this.right = right;
   }

   _createClass(Node, [{
      key: 'show',
      value: function show() {
         return this.data;
      }
   }]);

   return Node;
}();

var BST = function () {
   function BST() {
      _classCallCheck(this, BST);

      this.root = null;
   }

   _createClass(BST, [{
      key: 'insert',
      value: function insert(data) {
         var n = new Node(data, null, null);
         if (!this.root) {
            this.root = n;
         } else {
            var cur = this.root;
            var parent = null;
            while (true) {
               parent = cur;
               if (data < cur.data) {
                  //存在左边
                  cur = cur.left;
                  if (cur == null) {
                     parent.left = n;
                     break;
                  }
               } else {
                  //存在右边
                  cur = cur.right;
                  if (cur == null) {
                     parent.right = n;
                     break;
                  }
               }
            }
         }
      }
   }, {
      key: 'inOrder',
      value: function inOrder(node) {
         if (node != null) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
         }
      }
   }, {
      key: 'preOrder',
      value: function preOrder(node) {
         if (node != null) {
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
         }
      }
   }, {
      key: 'postOrder',
      value: function postOrder(node) {
         if (node != null) {
            //左右根
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.data);
         }
      }
   }, {
      key: 'getMin',
      value: function getMin() {
         var current = this.root;
         while (current.left) {
            current = current.left;
         }
         return current.data;
      }
   }, {
      key: 'getMax',
      value: function getMax() {
         var current = this.root;
         while (current.right) {
            current = current.right;
         }
         return current.data;
      }
   }, {
      key: 'find',
      value: function find(data) {
         var current = this.root;
         while (current) {
            if (data < current.data) {
               current = current.left;
            } else if (data > current.data) {
               current = current.right;
            } else {
               return current;
            }
         }
         return null;
      }
   }, {
      key: 'remove',
      value: function remove(data) {
         removeNode(this.root, data);
      }
   }, {
      key: 'removeNode',
      value: function (_removeNode) {
         function removeNode(_x, _x2) {
            return _removeNode.apply(this, arguments);
         }

         removeNode.toString = function () {
            return _removeNode.toString();
         };

         return removeNode;
      }(function (node, data) {
         if (node == null) {
            return null;
         } else {
            if (node.data == data) {
               if (node.left == null && node.right == null) {
                  return node;
               } else if (node.left == null) {
                  return node.right;
               } else if (node.right == null) {
                  return node.left;
               } else {
                  //都不等于空的时候,得到右侧树的最小节点
                  var smallNode = this.getSmallest(node.right);
                  smallNode.left = node.left;
                  return node.right;
               }
            } else if (data < node.data) {
               node.left = removeNode(node.left, data);
               return node;
            } else {
               node.right = removeNode(node.right, data);
               return node;
            }
         }
      })
   }, {
      key: 'getSmallest',
      value: function getSmallest(node) {
         var current = node;
         while (current.left) {
            current = current.left;
         }
         return current;
      }
   }]);

   return BST;
}();

var node = new Node(5, 2, 2);
var bst = new BST();
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);
console.log('--------中序遍历开始-----------------');
bst.inOrder(bst.root);
console.log('--------中序遍历结束----------------');
console.log('--------前序遍历开始-----------------');
bst.preOrder(bst.root);
console.log('--------前序遍历结束-----------------');
console.log('--------后序遍历开始-----------------');
bst.postOrder(bst.root);
console.log('--------后序遍历结束-----------------');
var min = bst.getMin();
var max = bst.getMax();
var keyNode = bst.find('16');
console.log('找值为16的节点', keyNode);
console.log('最小值', min);
console.log('最大值', max);
/*结构*/
console.log('根', bst.root);
//http://localhost:8999/app/views/