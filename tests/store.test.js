import {describe, it, expect, beforeEach, vi } from "vitest";
import { createStore } from "../js/store.js";
import { reducer } from "../js/reducer.js";

describe("state-manager", () => {

    let initialState = [
        {
            id: 0,
            text: 'hello world',
            completed:false
        }
    ]

    let store;
    let subscriber;

    beforeEach(() => {
        store = createStore(initialState, reducer);
        subscriber = vi.fn()

        store.subscribe(() => {
            subscriber()
        })
    })

    it("dispatch action", () => {

        let state = store.dispatch({ type: 'TASK_DELETED', payload: 0 })
        
        expect(state).toStrictEqual([])

        expect(subscriber).toHaveBeenCalledOnce()
    })
})