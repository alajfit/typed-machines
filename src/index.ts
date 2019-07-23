import { Machine } from 'xstate'

enum TYPES {
    ATOMIC = 'atomic',
    COMPOUND = 'compound',
    PARALLEL = 'parallel',
    FINAL = 'final',
    HISTORY = 'history'
}

interface MachineValue {
    id: string,
    type: TYPES
}

class xMachine {
    private id: string
    private initial: string
    private context: object
    private states: object = {}
    private type: TYPES
    private transitions: [] = []

    constructor(
        id: string,
        type: TYPES = TYPES.COMPOUND
    ) {
        this.id = id
        this.type = type
    }

    parallel(id: string, machine) {
        this.states[id] = machine
        this.type = TYPES.PARALLEL
    }

    state(id: string, machine) {
        this.states[id] = machine
    }
}

