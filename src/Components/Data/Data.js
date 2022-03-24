class TreeNode {
    constructor(key, value = key, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.children = [];
    }
  
    get isLeaf() {
        return this.children.length === 0;
    }
  
    get hasChildren() {
        return !this.isLeaf;
    }
}

class Tree {
    constructor(key, value = key) {
        this.root = new TreeNode(key, value);
    }
  
    *preOrderTraversal(node = this.root) {
        yield node;
        if (node.children.length) {
            for (let child of node.children) {
                yield* this.preOrderTraversal(child);
            }
        }
    }
  
    *postOrderTraversal(node = this.root) {
        if (node.children.length) {
            for (let child of node.children) {
                yield* this.postOrderTraversal(child);
            }
        }
        yield node;
    }
  
    insert(parentNodeKey, key, value = key) {
        for (let node of this.preOrderTraversal()) {
            if (node.key === parentNodeKey) {
                node.children.push(new TreeNode(key, value, node));
                return true;
            }
        }
        return false;
    }
  
    remove(key) {
        for (let node of this.preOrderTraversal()) {
            const filtered = node.children.filter(c => c.key !== key);
            if (filtered.length !== node.children.length) {
                node.children = filtered;
                return true;
            }
        }
        return false;
    }
  
    find(key) {
        for (let node of this.preOrderTraversal()) {
            if (node.key === key) return node;
        }
        return undefined;
    }

    left(key) {
        if (this.root.hasChildren){
            const leftKey = parseInt(this.find(key).key.toString() + "1")
            return this.find(leftKey)
        }
        else {
            return undefined
        }
    }

    right(key) {
        if (this.root.hasChildren){
            const rightKey = parseInt(this.find(key).key.toString() + "2")
            return this.find(rightKey)
        }
        else {
            return undefined
        }
    }
    easyInsert(path, value) {
        let finalPath = "1"
        const parsedPath = path.split(',')
        for (let direction of parsedPath) {
            if (direction === "oui"){
                finalPath += "2"
            }
            else{
                finalPath += "1"
            }
        }
        const finalPathParent = finalPath.slice(0, -1)
        //console.log(finalPathParent)
        if (this.find(parseInt(finalPathParent)) === undefined){
            return console.error("Vous devez déjà faire les branches supérieures !\nLe " + (finalPathParent.length) + "ème étage n'existe pas.")
        }
        else
        {
            //console.log(parseInt(finalPath))
            this.insert(parseInt(finalPathParent), parseInt(finalPath), value)
        }
    }
}

const themeAgriculture = new Tree(1, "Est-ce que vous voulez un métier manuel ?")
themeAgriculture.easyInsert('non', "Voulez-vous être ingénieur agronome ?")
themeAgriculture.easyInsert('oui', "Voulez-vous travailler avec des animaux ?")
themeAgriculture.easyInsert('non,non', "Voulez-vous faire de la comptabilité pour l'agriculture ?")
themeAgriculture.easyInsert('non,oui', ['développement agricole', 'élevage', 'machinisme agricole'])
themeAgriculture.easyInsert('oui,oui', ['animaux', 'soins aux animaux'])
themeAgriculture.easyInsert('oui,non', "Tu préfères peut-être la culture ?")
themeAgriculture.easyInsert('non,non,non', "REDIRECTION")
themeAgriculture.easyInsert('non,non,oui', ['comptabilité'])
themeAgriculture.easyInsert('oui,oui,oui', ['agriculture', 'aquaculture'])
themeAgriculture.easyInsert('oui,oui,non', "REDIRECTION")

const themeArchitecture = new Tree(1, "Blablabla")
themeArchitecture.easyInsert('non', "Hehe")

let themesToExport = {
    agriculture: themeAgriculture,
    architecture: themeArchitecture
}

export const themes = themesToExport