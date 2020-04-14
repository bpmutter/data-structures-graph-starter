function numRegions(graph) {
    let components = new Set();
    let regions = 0;
    for(let node in graph){
        if(depthFirst(node, graph, components)) regions++;
    }
    return regions;   
}

function depthFirst(node, graph, set){
    if(set.has(node)) return false;
    set.add(node);
    graph[node].forEach(neighbor=>depthFirst(neighbor, graph, set));

    return true;
}

module.exports = {
    numRegions
};