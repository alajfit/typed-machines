import { Machine } from 'xstate'
import {
    DefaultContext
} from 'xstate/lib/types'

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

class xState {
    private id: string

    constructor(
        id: string
    ) {
        this.id = id
    }
}

class xMachine extends xState {
    private initial: string
    private context: DefaultContext
    private states: object = {}
    private transitions: [] = []

    constructor(
        id: string
    ) {
        super(id)
    }

    parallel(id: string, machine) {
        this.states[id] = machine
    }

    state(id: string, machine) {
        this.states[id] = machine
    }
}

class xChart extends xMachine {
    private type: TYPES

    constructor(
        id: string
    ) {
        super(id)
        this.type = TYPES.PARALLEL
    }
}
