class NodeS {
    constructor(value, next = null){
        this.value = value,
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null,
        this.tail = null
    }
}

LinkedList.prototype.addToHead = function (value){
    let NewNode = new NodeS(value);
    if(this.head === null){
        this.head = NewNode;
        this.tail = NewNode;
    }else{
        NewNode.next = this.head;
        this.head = NewNode;       
    }
    return this.head;
};


LinkedList.prototype.addToEnd = function(value){
    let NewNode = new NodeS(value);
    if(this.head === null){
        this.head = NewNode;
        this.tail = NewNode;
    }else{
        let it = this.head;
        while(it.next !== null){
            it = it.next;
        }
        it.next = NewNode;
        this.tail = NewNode;
    }
    return this.tail;
};

LinkedList.prototype.contains = function(value){
    let it = this.head;
    while(it !== null){
        if(it.value === value){
            return true;
        }
        it = it.next;
    }
    console.log('NO lo contiene');
    return false;
}

LinkedList.prototype.addAfterValue = function(value, valueS){
    let NewNode = new NodeS(value);

    if(this.contains(valueS)){
        let it = this.head;
        while(it !== null){
            if(it.value === valueS){
                NewNode.next = it.next;
                it.next = NewNode;
                break;
            }
            it = it.next;
        }
    }else{
        return "no existe el valor dentro de la lista";
    }   
};

LinkedList.prototype.addBeforeValue = function(value, valueS){
    let NewNode = new NodeS(value);
    if (this.contains(valueS)){
        if(this.head.value === valueS){
            this.addToHead(value);
        }else{
            it = this.head;
            while(it !== null && it.next !== null){
                if(it.next.value === valueS){
                    NewNode.next = it.next;
                    it.next = NewNode;    
                    break;
                }
                it = it.next;
            }
        }
    
    }else{
        return "no existe el valor dentro de la lista";
    }
}

LinkedList.prototype.deleteValue = function(value){

    if(this.contains(value)){
        let bit = this.head;
        let it = this.head.next;
        if(this.head.value === value){
            this.head = this.head.next;
        }else{
            while(it !== null){
                if(it.value === value){
                    bit.next = it.next;
                }
                if(it == this.tail && it.value == value){
                    this.tail = bit;
                    bit.next = null;
                }               
                it = it.next;
                bit = bit.next;
            }
        }
    }else{
        return "no existe el valor dentro de la lista";
    }
}

LinkedList.prototype.displayAll = function(){
    it = this.head;
    while(it !== null){
        console.log( it.value + " ");
        it = it.next;
    }
}

let LS = new LinkedList();
LS.addToHead(5);
LS.addToHead(1);
LS.addToEnd(10);
LS.addAfterValue(7,5);
LS.addBeforeValue(9,10);
LS.addBeforeValue(30,1);
LS.addAfterValue(70,10);
LS.displayAll();
LS.deleteValue(70);
console.log('-------------------------------');
LS.displayAll();
