class Stack {
    constructor(){
        this.stack = []
    }

    push(array) {
        if (Array.isArray(array)) {
            array.forEach(element => {
                if (typeof element === 'string') {
                    this.stack.push(element)
                }
            });
        } else if (typeof array === 'string') {
            this.stack.push(array)
        }
    }


    pop(){
        if (this.stack.length>0) {
            this.stack.pop()
        }
        else {
            console.log('Stack is currently empty.')
        }
    }

    check(){
        console.log(this.stack)
        return this.stack
    }
}

const stack = new Stack()
stack.push('Milk')
stack.push('Eggs')
stack.check() // ['Milk','Eggs']
stack.pop()
stack.check() // ['Milk']
stack.pop()
stack.check () // []
stack.push(['Ice Cream', 10, [], 'Cellphone'])
stack.check() // ['Ice Cream', 'Cellphone']
stack.pop()
stack.check() // ['Cellphone']
stack.pop()
stack.check() // []
stack.pop() // "Stack is currently empty."