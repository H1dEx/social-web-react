import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="THAT`s MY TESTING STATUUS!"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("THAT`s MY TESTING STATUUS!");
    });

    test("after creation <span> with status should be displayed", () => {
        const component = create(<ProfileStatus status="THAT`s MY TESTING STATUUS!"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after creation <input> with status shouldn`t be displayed", () => {
        const component = create(<ProfileStatus status="THAT`s MY TESTING STATUUS!"/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });

    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status="THAT`s MY TESTING STATUUS!"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("THAT`s MY TESTING STATUUS!");
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="THAT`s MY TESTING STATUUS!"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("THAT`s MY TESTING STATUUS!")
    })

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="THAT`s MY TESTING STATUUS!" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    })
});