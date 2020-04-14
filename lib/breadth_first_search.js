const { GraphNode } = require('./graph_node')

function breadthFirstSearch(startingNode, targetVal) {
    let q = [startingNode];
    let visited = new Set();
    while(q.length){
        let node = q.shift();
        if(visited.has(node)) continue;
        visited.add(node);
        if(node.val === targetVal) return node;
        q.push(...node.neighbors); 
    }

    return null;
   

}


// let a = new GraphNode('a');
// let b = new GraphNode('b');
// let c1 = new GraphNode('c');
// let c2 = new GraphNode('c');
// a.neighbors = [b, c1];
// b.neighbors = [c2];
// console.log(breadthFirstSearch(a, "d"));


module.exports = {
    breadthFirstSearch
};