const {
    GraphNode
} = require('./graph_node')


function maxValue(node, visited=new Set()) {
    let q = [node];
    while (q.length) {
        let node = q.shift();
        if (visited.has(node.val)) continue;
        visited.add(node.val);
        q.push(...node.neighbors);
    }

    largest = Array.from(visited.values()).reduce((largest, val)=> {
        return largest>val ? largest : val;
    })
    return largest;
}

let a = new GraphNode('a');
let b = new GraphNode('b');
let c1 = new GraphNode('c');
let c2 = new GraphNode('c');
a.neighbors = [b, c1];
b.neighbors = [c2];
console.log(maxValue(a));
module.exports = {
    maxValue
};