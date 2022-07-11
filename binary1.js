class Node {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
    insert(data) {
      const node = this.root;
      if (node === null) {
        this.root = new Node(data);
        return;
      } else {
        const searchTree = function(node) {
          if (data < node.data) {
            if (node.left === null) {
              node.left = new Node(data);
              return;
            } else if (node.left !== null) {
              return searchTree(node.left);
            }
          } else if (data > node.data) {
            if (node.right === null) {
              node.right = new Node(data);
              return;
            } else if (node.right !== null) {
              return searchTree(node.right);
            }
          } else {
            return null;
          }
        };
        return searchTree(node);
      }
    }
    find(data) {
        let current = this.root;
        while (current.data !== data) {
          if (data < current.data) {
            current = current.left;
          } else {
            current = current.right;
          }
          if (current === null) {
            return null;
          }
        }
        return current;
      }

      preOrder() {
        if (this.root == null) {
          return null;
        } else {
          var result = new Array();
          function traversePreOrder(node) {
            result.push(node.data);
            node.left && traversePreOrder(node.left);
            node.right && traversePreOrder(node.right);
          };
          traversePreOrder(this.root);
          return result;
        };
      }

      iterate(){
        if(this.root==null){
            return null
        }
       else {

        function iteratepreorder(root){
        const stack=[root] 
        const result=[] 
        while (stack.length){
            let node=stack.pop();

            result.push(node.data)
            if(node.right)stack.push(node.right)
            if(node.left)stack.push(node.left)

        }
       
        return result

        }
        let ans=iteratepreorder(this.root)
        return ans
        

       }

      }
  }
    
    
  const bst = new BST();
  
  bst.insert(9);
  bst.insert(4);
  bst.insert(17);
  bst.insert(27);
  bst.insert(37);
  
  
  console.log(bst)
  console.log(bst.find(17))
  console.log('preOrder: ' + bst.preOrder());
  console.log(' iter preOrder: ' + bst.iterate());