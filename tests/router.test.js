import { describe, it, expect, beforeEach,vi } from "vitest";
import { createRouter } from "../js/router.js";

describe("router test", () => {

    beforeEach(() => {
        window.history.pushState({},"","/")
    })

    it("testing navigaiton", () => {
        let router = createRouter()

        const homeComponent = vi.fn()

        router.register('/home', homeComponent)
        
        expect(window.location.href).toBe('http://localhost:3000/')

        router.navigate('/home')

        expect(homeComponent).toHaveBeenCalledOnce()
        expect(window.location.href).toBe('http://localhost:3000/home')
        console.log(window.location.href)
    })
})