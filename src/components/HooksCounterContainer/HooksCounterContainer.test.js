import React from "react";
import { shallow } from "enzyme";
import HooksCounterContainer from "./HooksCounterContainer";

describe("HooksCounterContainer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HooksCounterContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
